/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixDelegateApprovals extends Contract<ISynthetixDelegateApprovals> {
  approveExchangeOnBehalf: Send<(arg0: AddressLike) => void, ISynthetixDelegateApprovals>
  canExchangeFor: Call<(arg0: AddressLike, arg1: AddressLike) => boolean, ISynthetixDelegateApprovals>
}

let ISynthetixDelegateApprovalsBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixDelegateApprovalsBytecode = '0x';
}

// prettier-ignore
export const ISynthetixDelegateApprovals = contract<ISynthetixDelegateApprovals>(ISynthetixDelegateApprovalsBytecode)`
  function approveExchangeOnBehalf(address)
  function canExchangeFor(address, address) view returns (bool)
`;
