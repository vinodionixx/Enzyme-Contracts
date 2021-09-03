/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IPrimitivePriceFeed extends Contract<IPrimitivePriceFeed> {
  calcCanonicalValue: Call<(arg0: AddressLike, arg1: BigNumberish, arg2: AddressLike) => { '0': BigNumber, '1': boolean }, IPrimitivePriceFeed>
  calcLiveValue: Call<(arg0: AddressLike, arg1: BigNumberish, arg2: AddressLike) => { '0': BigNumber, '1': boolean }, IPrimitivePriceFeed>
  isSupportedAsset: Call<(arg0: AddressLike) => boolean, IPrimitivePriceFeed>
}

let IPrimitivePriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IPrimitivePriceFeedBytecode = '0x';
}

// prettier-ignore
export const IPrimitivePriceFeed = contract<IPrimitivePriceFeed>(IPrimitivePriceFeedBytecode)`
  function calcCanonicalValue(address, uint256, address) view returns (uint256, bool)
  function calcLiveValue(address, uint256, address) view returns (uint256, bool)
  function isSupportedAsset(address) view returns (bool)
`;
