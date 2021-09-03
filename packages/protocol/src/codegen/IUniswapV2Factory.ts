/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IUniswapV2Factory extends Contract<IUniswapV2Factory> {
  feeTo: Call<() => string, IUniswapV2Factory>
  getPair: Call<(arg0: AddressLike, arg1: AddressLike) => string, IUniswapV2Factory>
}

let IUniswapV2FactoryBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IUniswapV2FactoryBytecode = '0x';
}

// prettier-ignore
export const IUniswapV2Factory = contract<IUniswapV2Factory>(IUniswapV2FactoryBytecode)`
  function feeTo() view returns (address)
  function getPair(address, address) view returns (address)
`;
