/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IAlphaHomoraV1Bank extends Contract<IAlphaHomoraV1Bank> {
  deposit: Send<() => void, IAlphaHomoraV1Bank>
  totalETH: Call<() => BigNumber, IAlphaHomoraV1Bank>
  totalSupply: Call<() => BigNumber, IAlphaHomoraV1Bank>
  withdraw: Send<(arg0: BigNumberish) => void, IAlphaHomoraV1Bank>
}

let IAlphaHomoraV1BankBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IAlphaHomoraV1BankBytecode = '0x';
}

// prettier-ignore
export const IAlphaHomoraV1Bank = contract<IAlphaHomoraV1Bank>(IAlphaHomoraV1BankBytecode)`
  function deposit() payable
  function totalETH() view returns (uint256)
  function totalSupply() view returns (uint256)
  function withdraw(uint256)
`;
