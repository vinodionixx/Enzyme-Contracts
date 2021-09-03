/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixExchangeRates extends Contract<ISynthetixExchangeRates> {
  rateAndInvalid: Call<(arg0: BytesLike) => { '0': BigNumber, '1': boolean }, ISynthetixExchangeRates>
}

let ISynthetixExchangeRatesBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixExchangeRatesBytecode = '0x';
}

// prettier-ignore
export const ISynthetixExchangeRates = contract<ISynthetixExchangeRates>(ISynthetixExchangeRatesBytecode)`
  function rateAndInvalid(bytes32) view returns (uint256, bool)
`;
