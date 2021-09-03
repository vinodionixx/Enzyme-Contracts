/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IDerivativePriceFeed extends Contract<IDerivativePriceFeed> {
  calcUnderlyingValues: Send<(arg0: AddressLike, arg1: BigNumberish) => { '0': string[], '1': BigNumber[] }, IDerivativePriceFeed>
  isSupportedAsset: Call<(arg0: AddressLike) => boolean, IDerivativePriceFeed>
}

let IDerivativePriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IDerivativePriceFeedBytecode = '0x';
}

// prettier-ignore
export const IDerivativePriceFeed = contract<IDerivativePriceFeed>(IDerivativePriceFeedBytecode)`
  function calcUnderlyingValues(address, uint256) returns (address[], uint256[])
  function isSupportedAsset(address) view returns (bool)
`;
