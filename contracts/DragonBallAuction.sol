// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DragonBallAuction is IERC721Receiver, Ownable {
    // set nft
    IERC721 private nft;
    uint public constant AUCTION_SERVICE_FEE_RATE = 3; // Percentage
    uint public constant MINIMUM_BID_RATE = 110; // Percentage

    event CreateAuction(
        address indexed _from,
        uint256 _auctionId,
        uint256 _tokenId,
        uint256 _initialPrice,
        uint256 _startTime,
        uint256 _endTime
    );
    event JoinAuction(
        address indexed _from,
        uint256 _auctionId,
        uint256 _bidPrice,
        address indexed _previousBidder
    );
    event FinishAuction(
        address indexed _from,
        uint256 _auctionId,
        uint256 _tokenId,
        uint256 _price,
        address indexed _auctioneer,
        address indexed _lastBidder
    );
    event CancelAuction(
        address indexed _from,
        uint256 _auctionId,
        uint256 _tokenId,
        address indexed _auctioneer,
        address indexed _previousBidder
    );

    constructor(IERC721 _nft) {
        nft = _nft;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }

    /// Auction information ///
    struct AuctionInfo {
        address auctioneer;
        uint256 _tokenId;
        uint256 initialPrice;
        address previousBidder;
        uint256 lastBid;
        address lastBidder;
        uint256 startTime;
        uint256 endTime;
        bool completed;
        bool active;
        uint256 auctionId;
    }

    AuctionInfo[] private auction;

    function createAuction(
        uint256 _tokenId,
        uint256 _initialPrice,
        uint256 _startTime,
        uint256 _endTime
    ) public {
        require(block.timestamp <= _startTime, "Auction can not start");
        require(_startTime < _endTime, "Auction can not end before it starts");
        require(0 < _initialPrice, "Initial price must be greater than 0");

        require(
            nft.ownerOf(_tokenId) == msg.sender,
            "Must stake your own token"
        );
        require(
            nft.isApprovedForAll(msg.sender, address(this)),
            "Marketplace is not approved to transfer this NFT"
        );

        // Transfer ownership to the auctioneer
        nft.safeTransferFrom(msg.sender, address(this), _tokenId);

        AuctionInfo memory _auction = AuctionInfo(
            msg.sender, // auctioneer
            _tokenId, // tokenId
            _initialPrice, // initialPrice
            address(0), // previousBidder
            _initialPrice, // lastBid
            address(0), // lastBidder
            _startTime, // startTime
            _endTime, // endTime
            false, // completed
            true, // active
            auction.length // auctionID
        );
        auction.push(_auction);
        emit CreateAuction(
            msg.sender,
            _auction.auctionId,
            _tokenId,
            _initialPrice,
            _startTime,
            _endTime
        );
    }

    function joinAuction(uint256 _auctionId) public payable {
        AuctionInfo memory _auction = auction[_auctionId];

        require(
            block.timestamp >= _auction.startTime,
            "Auction has not started"
        );
        require(_auction.completed == false, "Auction is already completed");
        require(_auction.active, "Auction is not active");

        uint256 _minBid = _auction.lastBidder == address(0)
            ? _auction.initialPrice
            : (_auction.lastBid * MINIMUM_BID_RATE) / 100;

        require(
            _minBid <= msg.value,
            "Bid price must be greater than the minimum price"
        );
        require(
            _auction.auctioneer != msg.sender,
            "Can not bid on your own auction"
        );

        // Refund token to previous bidder
        if (_auction.lastBidder != address(0)) {
            payable(_auction.lastBidder).transfer(_auction.lastBid);
        }

        // Update auction info
        auction[_auctionId].previousBidder = _auction.lastBidder;
        auction[_auctionId].lastBidder = msg.sender;
        auction[_auctionId].lastBid = msg.value;

        // Sender is also the last bidder
        emit JoinAuction(
            msg.sender,
            _auctionId,
            msg.value,
            auction[_auctionId].previousBidder
        );
    }

    function finishAuction(
        uint256 _auctionId
    ) public onlyAuctioneer(_auctionId) {
        require(
            auction[_auctionId].completed == false,
            "Auction is already completed"
        );
        require(auction[_auctionId].active, "Auction is not active");
        require(
            auction[_auctionId].lastBidder != address(0),
            "No bids were made in this auction"
        );
        require(
            block.timestamp >= auction[_auctionId].endTime,
            "Auction has not ended yet"
        );
        // Transfer NFT to winner which is the last bidder
        nft.safeTransferFrom(
            address(this),
            auction[_auctionId].lastBidder,
            auction[_auctionId]._tokenId
        );

        // Calculate all fee
        uint256 lastBid = auction[_auctionId].lastBid;
        uint256 profit = auction[_auctionId].lastBid -
            auction[_auctionId].initialPrice;
        uint256 auctionServiceFee = (profit * AUCTION_SERVICE_FEE_RATE) / 100;
        uint256 auctioneerReceive = lastBid - auctionServiceFee;

        // Transfer token to auctioneer
        payable(auction[_auctionId].auctioneer).transfer(auctioneerReceive);

        auction[_auctionId].completed = true;
        auction[_auctionId].active = false;

        emit FinishAuction(
            msg.sender,
            _auctionId,
            auction[_auctionId]._tokenId,
            lastBid,
            auction[_auctionId].auctioneer,
            auction[_auctionId].lastBidder
        );
    }

    function cancelAuction(
        uint256 _auctionId
    ) public onlyAuctioneer(_auctionId) {
        require(
            auction[_auctionId].completed == false,
            "Auction is already completed"
        );
        require(auction[_auctionId].active, "Auction is not active");

        // Return NFT back to auctioneer
        nft.safeTransferFrom(
            address(this),
            auction[_auctionId].auctioneer,
            auction[_auctionId]._tokenId
        );

        // Refund token to previous bidder
        if (auction[_auctionId].lastBidder != address(0)) {
            payable(auction[_auctionId].lastBidder).transfer(
                auction[_auctionId].lastBid
            );
        }

        auction[_auctionId].completed = true;
        auction[_auctionId].active = false;

        emit CancelAuction(
            msg.sender,
            _auctionId,
            auction[_auctionId]._tokenId,
            auction[_auctionId].auctioneer,
            auction[_auctionId].lastBidder
        );
    }

    function getAuction(
        uint256 _auctionId
    ) public view returns (AuctionInfo memory) {
        return auction[_auctionId];
    }

    function getAuctionByStatus(
        bool _active
    ) public view returns (AuctionInfo[] memory) {
        uint length = 0;
        for (uint i = 0; i < auction.length; i++) {
            if (auction[i].active == _active) {
                length++;
            }
        }

        AuctionInfo[] memory results = new AuctionInfo[](length);
        uint j = 0;
        for (uint256 index = 0; index < auction.length; index++) {
            if (auction[index].active == _active) {
                results[j] = auction[index];
                j++;
            }
        }
        return results;
    }

    modifier onlyAuctioneer(uint256 _auctionId) {
        require(
            (msg.sender == auction[_auctionId].auctioneer ||
                msg.sender == owner()),
            "Only auctioneer or owner can perform this action"
        );
        _;
    }
}
