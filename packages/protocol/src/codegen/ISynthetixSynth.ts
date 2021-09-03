/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixSynth extends Contract<ISynthetixSynth> {
  currencyKey: Call<() => string, ISynthetixSynth>
}

let ISynthetixSynthBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixSynthBytecode = '0x';
}

// prettier-ignore
export const ISynthetixSynth = contract<ISynthetixSynth>(ISynthetixSynthBytecode)`
  function currencyKey() view returns (bytes32)
`;
