/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IMakerDaoPot extends Contract<IMakerDaoPot> {
  chi: Call<() => BigNumber, IMakerDaoPot>
  drip: Send<() => BigNumber, IMakerDaoPot>
  rho: Call<() => BigNumber, IMakerDaoPot>
}

let IMakerDaoPotBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IMakerDaoPotBytecode = '0x';
}

// prettier-ignore
export const IMakerDaoPot = contract<IMakerDaoPot>(IMakerDaoPotBytecode)`
  function chi() view returns (uint256)
  function drip() returns (uint256)
  function rho() view returns (uint256)
`;
