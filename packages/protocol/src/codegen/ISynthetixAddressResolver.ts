/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixAddressResolver extends Contract<ISynthetixAddressResolver> {
  requireAndGetAddress: Call<(arg0: BytesLike, arg1: string) => string, ISynthetixAddressResolver>
}

let ISynthetixAddressResolverBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixAddressResolverBytecode = '0x';
}

// prettier-ignore
export const ISynthetixAddressResolver = contract<ISynthetixAddressResolver>(ISynthetixAddressResolverBytecode)`
  function requireAndGetAddress(bytes32, string) view returns (address)
`;
