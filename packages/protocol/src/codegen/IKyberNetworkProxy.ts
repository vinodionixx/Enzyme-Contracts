/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IKyberNetworkProxy extends Contract<IKyberNetworkProxy> {
  swapEtherToToken: Send<(arg0: AddressLike, arg1: BigNumberish) => BigNumber, IKyberNetworkProxy>
  swapTokenToEther: Send<(arg0: AddressLike, arg1: BigNumberish, arg2: BigNumberish) => BigNumber, IKyberNetworkProxy>
  swapTokenToToken: Send<(arg0: AddressLike, arg1: BigNumberish, arg2: AddressLike, arg3: BigNumberish) => BigNumber, IKyberNetworkProxy>
}

let IKyberNetworkProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IKyberNetworkProxyBytecode = '0x';
}

// prettier-ignore
export const IKyberNetworkProxy = contract<IKyberNetworkProxy>(IKyberNetworkProxyBytecode)`
  function swapEtherToToken(address, uint256) payable returns (uint256)
  function swapTokenToEther(address, uint256, uint256) returns (uint256)
  function swapTokenToToken(address, uint256, address, uint256) returns (uint256)
`;
