/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestMarketplace,
  TestMarketplaceInterface,
} from "../../../contracts/TestMarketplace.sol/TestMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC721Enumerable",
        name: "_nft",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_oldAuthor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "BuyNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "ListNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721Enumerable",
        name: "_nft",
        type: "address",
      },
    ],
    name: "SetNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tax",
        type: "uint256",
      },
    ],
    name: "SetTax",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "UnListNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "UpdateListingNFTPrice",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "buyNft",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getListedNft",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct TestMarketplace.ListDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Enumerable",
        name: "_nft",
        type: "address",
      },
    ],
    name: "setNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tax",
        type: "uint256",
      },
    ],
    name: "setTax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "unlistNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "updateListingNftPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600a6002553480156200001657600080fd5b50604051620024203803806200242083398181016040528101906200003c9190620001ee565b6200005c62000050620000a460201b60201c565b620000ac60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000220565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001a28262000175565b9050919050565b6000620001b68262000195565b9050919050565b620001c881620001a9565b8114620001d457600080fd5b50565b600081519050620001e881620001bd565b92915050565b60006020828403121562000207576200020662000170565b5b60006200021784828501620001d7565b91505092915050565b6121f080620002306000396000f3fe6080604052600436106100a75760003560e01c80637a53fde6116100645780637a53fde6146101855780638da5cb5b146101b05780639e75689c146101db578063f2fde38b14610204578063f3c133871461022d578063fe8723e114610256576100a7565b8063150b7a02146100ac578063243adbdd146100e95780632e5bb6ff146101055780633ccfd60b1461012e5780635164686914610145578063715018a61461016e575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce919061162d565b61027f565b6040516100e091906116f0565b60405180910390f35b61010360048036038101906100fe919061170b565b6102ad565b005b34801561011157600080fd5b5061012c6004803603810190610127919061170b565b610756565b005b34801561013a57600080fd5b5061014361079f565b005b34801561015157600080fd5b5061016c60048036038101906101679190611738565b6107f0565b005b34801561017a57600080fd5b50610183610a0c565b005b34801561019157600080fd5b5061019a610a20565b6040516101a79190611899565b60405180910390f35b3480156101bc57600080fd5b506101c5610c7e565b6040516101d291906118ca565b60405180910390f35b3480156101e757600080fd5b5061020260048036038101906101fd919061170b565b610ca7565b005b34801561021057600080fd5b5061022b600480360381019061022691906118e5565b610f36565b005b34801561023957600080fd5b50610254600480360381019061024f9190611950565b610fb9565b005b34801561026257600080fd5b5061027d60048036038101906102789190611738565b61103c565b005b60007f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f905095945050505050565b6003600082815260200190815260200160002060010154341015610306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd906119da565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016103789190611a09565b602060405180830381865afa158015610395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b99190611a39565b73ffffffffffffffffffffffffffffffffffffffff161461040f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040690611ad8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036104b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104aa90611b44565b60405180910390fd5b60006003600083815260200190815260200160002060010154905060006064600254836104e09190611b93565b6104ea9190611c04565b9050600081836104fa9190611c35565b90506003600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610578573d6000803e3d6000fd5b50610581610c7e565b73ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156105c6573d6000803e3d6000fd5b5060006003600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336003600087815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3033886040518463ffffffff1660e01b81526004016106b693929190611c69565b600060405180830381600087803b1580156106d057600080fd5b505af11580156106e4573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe35677743c6b7abf01cca38cf0f4b986386e50105ec5fd3f42daeea57acf57a98787604051610747929190611ca0565b60405180910390a35050505050565b61075e6113a9565b806002819055507f9fa979502e438dac613eeda5e69bdaf59a326dc09969a480e1e19078b24e15d1816040516107949190611a09565b60405180910390a150565b6107a76113a9565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156107ed573d6000803e3d6000fd5b50565b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b81526004016108629190611a09565b602060405180830381865afa15801561087f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a39190611a39565b73ffffffffffffffffffffffffffffffffffffffff16146108f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f090611ad8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461099d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099490611d3b565b60405180910390fd5b8060036000848152602001908152602001600020600101819055503373ffffffffffffffffffffffffffffffffffffffff167f97b7db62aad9c854046238e600e81efb1cca19b191c55cdaa43ded0b503380d98383604051610a00929190611ca0565b60405180910390a25050565b610a146113a9565b610a1e6000611427565b565b60606000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a7f91906118ca565b602060405180830381865afa158015610a9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac09190611d70565b905060008167ffffffffffffffff811115610ade57610add611d9d565b5b604051908082528060200260200182016040528015610b1757816020015b610b046114f3565b815260200190600190039081610afc5790505b50905060005b82811015610c755760036000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5930856040518363ffffffff1660e01b8152600401610b86929190611dcc565b602060405180830381865afa158015610ba3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc79190611d70565b81526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481525050828281518110610c5d57610c5c611df5565b5b60200260200101819052508080600101915050610b1d565b50809250505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b8152600401610d199190611a09565b602060405180830381865afa158015610d36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5a9190611a39565b73ffffffffffffffffffffffffffffffffffffffff1614610db0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da790611ad8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4b90611e70565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b8152600401610eb393929190611c69565b600060405180830381600087803b158015610ecd57600080fd5b505af1158015610ee1573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167feab630e7b65be7272ded7edf9fd2e1b4af0c56fcb282521ea4e177f7f82fdc6a82604051610f2b9190611a09565b60405180910390a250565b610f3e6113a9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa490611f02565b60405180910390fd5b610fb681611427565b50565b610fc16113a9565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff8525b9383ba5cc1b196c9a879bcbe7911913876aaff159ec424e1bb6136fff2816040516110319190611f81565b60405180910390a150565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b81526004016110ae9190611a09565b602060405180830381865afa1580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190611a39565b73ffffffffffffffffffffffffffffffffffffffff1614611145576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113c9061200e565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b81526004016111a292919061202e565b602060405180830381865afa1580156111bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e3919061208f565b611222576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112199061212e565b60405180910390fd5b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001838152506003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3330856040518463ffffffff1660e01b815260040161132393929190611c69565b600060405180830381600087803b15801561133d57600080fd5b505af1158015611351573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167f6cd52e2afd4c9fdb90f6226975fb688c697f05f2c4306f5bff7ea8cd941ed7ce838360405161139d929190611ca0565b60405180910390a25050565b6113b16114eb565b73ffffffffffffffffffffffffffffffffffffffff166113cf610c7e565b73ffffffffffffffffffffffffffffffffffffffff1614611425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141c9061219a565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061155f82611534565b9050919050565b61156f81611554565b811461157a57600080fd5b50565b60008135905061158c81611566565b92915050565b6000819050919050565b6115a581611592565b81146115b057600080fd5b50565b6000813590506115c28161159c565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126115ed576115ec6115c8565b5b8235905067ffffffffffffffff81111561160a576116096115cd565b5b602083019150836001820283011115611626576116256115d2565b5b9250929050565b6000806000806000608086880312156116495761164861152a565b5b60006116578882890161157d565b95505060206116688882890161157d565b9450506040611679888289016115b3565b935050606086013567ffffffffffffffff81111561169a5761169961152f565b5b6116a6888289016115d7565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6116ea816116b5565b82525050565b600060208201905061170560008301846116e1565b92915050565b6000602082840312156117215761172061152a565b5b600061172f848285016115b3565b91505092915050565b6000806040838503121561174f5761174e61152a565b5b600061175d858286016115b3565b925050602061176e858286016115b3565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006117af82611534565b9050919050565b6117bf816117a4565b82525050565b6117ce81611592565b82525050565b6060820160008201516117ea60008501826117b6565b5060208201516117fd60208501826117c5565b50604082015161181060408501826117c5565b50505050565b600061182283836117d4565b60608301905092915050565b6000602082019050919050565b600061184682611778565b6118508185611783565b935061185b83611794565b8060005b8381101561188c5781516118738882611816565b975061187e8361182e565b92505060018101905061185f565b5085935050505092915050565b600060208201905081810360008301526118b3818461183b565b905092915050565b6118c481611554565b82525050565b60006020820190506118df60008301846118bb565b92915050565b6000602082840312156118fb576118fa61152a565b5b60006119098482850161157d565b91505092915050565b600061191d82611554565b9050919050565b61192d81611912565b811461193857600080fd5b50565b60008135905061194a81611924565b92915050565b6000602082840312156119665761196561152a565b5b60006119748482850161193b565b91505092915050565b600082825260208201905092915050565b7f496e73756666696369656e742046544d2073656e740000000000000000000000600082015250565b60006119c460158361197d565b91506119cf8261198e565b602082019050919050565b600060208201905081810360008301526119f3816119b7565b9050919050565b611a0381611592565b82525050565b6000602082019050611a1e60008301846119fa565b92915050565b600081519050611a3381611566565b92915050565b600060208284031215611a4f57611a4e61152a565b5b6000611a5d84828501611a24565b91505092915050565b7f54686973204e465420646f65736e2774206578697374206f6e206d61726b657460008201527f706c616365000000000000000000000000000000000000000000000000000000602082015250565b6000611ac260258361197d565b9150611acd82611a66565b604082019050919050565b60006020820190508181036000830152611af181611ab5565b9050919050565b7f4f776e65722063616e6e6f7420627579207468656972206f776e204e46540000600082015250565b6000611b2e601e8361197d565b9150611b3982611af8565b602082019050919050565b60006020820190508181036000830152611b5d81611b21565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b9e82611592565b9150611ba983611592565b9250828202611bb781611592565b91508282048414831517611bce57611bcd611b64565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611c0f82611592565b9150611c1a83611592565b925082611c2a57611c29611bd5565b5b828204905092915050565b6000611c4082611592565b9150611c4b83611592565b9250828203905081811115611c6357611c62611b64565b5b92915050565b6000606082019050611c7e60008301866118bb565b611c8b60208301856118bb565b611c9860408301846119fa565b949350505050565b6000604082019050611cb560008301856119fa565b611cc260208301846119fa565b9392505050565b7f4f6e6c79206f776e65722063616e20757064617465207072696365206f66207460008201527f686973204e465400000000000000000000000000000000000000000000000000602082015250565b6000611d2560278361197d565b9150611d3082611cc9565b604082019050919050565b60006020820190508181036000830152611d5481611d18565b9050919050565b600081519050611d6a8161159c565b92915050565b600060208284031215611d8657611d8561152a565b5b6000611d9484828501611d5b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000604082019050611de160008301856118bb565b611dee60208301846119fa565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f6e6c79206f776e65722063616e20756e6c6973742074686973204e46540000600082015250565b6000611e5a601e8361197d565b9150611e6582611e24565b602082019050919050565b60006020820190508181036000830152611e8981611e4d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611eec60268361197d565b9150611ef782611e90565b604082019050919050565b60006020820190508181036000830152611f1b81611edf565b9050919050565b6000819050919050565b6000611f47611f42611f3d84611534565b611f22565b611534565b9050919050565b6000611f5982611f2c565b9050919050565b6000611f6b82611f4e565b9050919050565b611f7b81611f60565b82525050565b6000602082019050611f966000830184611f72565b92915050565b7f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660008201527f5400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ff860218361197d565b915061200382611f9c565b604082019050919050565b6000602082019050818103600083015261202781611feb565b9050919050565b600060408201905061204360008301856118bb565b61205060208301846118bb565b9392505050565b60008115159050919050565b61206c81612057565b811461207757600080fd5b50565b60008151905061208981612063565b92915050565b6000602082840312156120a5576120a461152a565b5b60006120b38482850161207a565b91505092915050565b7f4d61726b6574706c616365206973206e6f7420617070726f76656420746f207460008201527f72616e736665722074686973204e465400000000000000000000000000000000602082015250565b600061211860308361197d565b9150612123826120bc565b604082019050919050565b600060208201905081810360008301526121478161210b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061218460208361197d565b915061218f8261214e565b602082019050919050565b600060208201905081810360008301526121b381612177565b905091905056fea2646970667358221220c51e4f3db57e6664dc500c1dd65241b1d87543c2f1f6319281d14aeb1713f94e64736f6c63430008180033";

type TestMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestMarketplace__factory extends ContractFactory {
  constructor(...args: TestMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _nft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_nft, overrides || {});
  }
  override deploy(
    _nft: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_nft, overrides || {}) as Promise<
      TestMarketplace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestMarketplace__factory {
    return super.connect(runner) as TestMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestMarketplaceInterface {
    return new Interface(_abi) as TestMarketplaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestMarketplace {
    return new Contract(address, _abi, runner) as unknown as TestMarketplace;
  }
}