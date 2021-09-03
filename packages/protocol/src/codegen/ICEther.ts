/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICEther extends Contract<ICEther> {
  mint: Send<() => void, ICEther>
}

let ICEtherBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICEtherBytecode = '0x';
}

// prettier-ignore
export const ICEther = contract<ICEther>(ICEtherBytecode)`
  function mint() payable
`;
