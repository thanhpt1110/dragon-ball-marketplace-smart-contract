//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DragonBallMarketplace is IERC721Receiver, Ownable {
    IERC721Enumerable private nft;
    struct ListDetail {
        address payable author;
        uint256 price;
        uint256 tokenId;
    }

    event ListNFT(address indexed _from, uint256 _tokenId, uint256 _price);
    event UnListNFT(address indexed _from, uint256 _tokenId);
    event BuyNFT(address indexed _from, address indexed _oldAuthor, uint256 _tokenId, uint256 _price);
    event UpdateListingNFTPrice(address indexed _from, uint256 _tokenId, uint256 _price);
    event SetTax(uint256 _tax);
    event SetNFT(IERC721Enumerable _nft);

    uint256 private tax = 10; // percentage
    mapping (uint256 => ListDetail) listDetail;

    constructor(IERC721Enumerable _nft) {
        nft = _nft;
    }

    function onERC721Received(address, address, uint256, bytes calldata) external override pure returns (bytes4) {
        return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    }

    function setTax(uint256 _tax) public onlyOwner {
        tax = _tax;
        emit SetTax(_tax);
    }

    function setNft(IERC721Enumerable _nft) public onlyOwner {
        nft = _nft;
        emit SetNFT(_nft);
    }

    function getListedNft() view public returns (ListDetail[] memory) {    
        uint balance = nft.balanceOf(address(this));
        ListDetail[] memory myNft = new ListDetail[](balance);
       
        for(uint i = 0; i < balance; i++) {
            myNft[i] = listDetail[nft.tokenOfOwnerByIndex(address(this), i)];
        }
        return myNft;
    }

    function listNft(uint256 _tokenId, uint256 _price) public {
        require(nft.ownerOf(_tokenId) == msg.sender, "You are not the owner of this NFT");
        require(nft.isApprovedForAll(msg.sender, address(this)), "Marketplace is not approved to transfer this NFT");

        listDetail[_tokenId] = ListDetail(payable(msg.sender), _price, _tokenId);

        nft.safeTransferFrom(msg.sender, address(this), _tokenId);
        emit ListNFT(msg.sender, _tokenId, _price);
    }

    function updateListingNftPrice(uint256 _tokenId, uint256 _price) public {
        require(nft.ownerOf(_tokenId) == address(this), "This NFT doesn't exist on marketplace");
        require(listDetail[_tokenId].author == msg.sender, "Only owner can update price of this NFT");

        listDetail[_tokenId].price = _price;
        emit UpdateListingNFTPrice(msg.sender, _tokenId, _price);
    }

    function unlistNft(uint256 _tokenId) public {
        require(nft.ownerOf(_tokenId) == address(this), "This NFT doesn't exist on marketplace");
        require(listDetail[_tokenId].author == msg.sender, "Only owner can unlist this NFT");

        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit UnListNFT(msg.sender, _tokenId);
    }

    function buyNft(uint256 _tokenId) public payable {
        require(msg.value >= listDetail[_tokenId].price, "Insufficient FTM sent");
        require(nft.ownerOf(_tokenId) == address(this), "This NFT doesn't exist on marketplace");
        
        uint256 price = listDetail[_tokenId].price;
        uint256 fee = price * tax / 100;
        uint256 sellerAmount = price - fee;

        // Transfer FTM to the seller
        listDetail[_tokenId].author.transfer(sellerAmount);

        // Transfer FTM tax to the owner of the contract
        payable(owner()).transfer(fee);
        
        // Get old author before transfer
        address payable oldAuthor = listDetail[_tokenId].author;

        // Update new author
        listDetail[_tokenId].author = payable(msg.sender);
        
        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit BuyNFT(msg.sender, oldAuthor, _tokenId, price);
    }

    // withdraw FTM
    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
