/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDragonBall,
  IDragonBallInterface,
} from "../../../contracts/DragonBall.sol/IDragonBall";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDragonBall__factory {
  static readonly abi = _abi;
  static createInterface(): IDragonBallInterface {
    return new Interface(_abi) as IDragonBallInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDragonBall {
    return new Contract(address, _abi, runner) as unknown as IDragonBall;
  }
}
