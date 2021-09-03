/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetix extends Contract<ISynthetix> {
  exchangeOnBehalfWithTracking: Send<(arg0: AddressLike, arg1: BytesLike, arg2: BigNumberish, arg3: BytesLike, arg4: AddressLike, arg5: BytesLike) => BigNumber, ISynthetix>
}

let ISynthetixBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixBytecode = '0x';
}

// prettier-ignore
export const ISynthetix = contract<ISynthetix>(ISynthetixBytecode)`
  function exchangeOnBehalfWithTracking(address, bytes32, uint256, bytes32, address, bytes32) returns (uint256)
`;
