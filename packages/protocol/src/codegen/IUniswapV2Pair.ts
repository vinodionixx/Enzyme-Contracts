/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IUniswapV2Pair extends Contract<IUniswapV2Pair> {
  getReserves: Call<() => { '0': BigNumber, '1': BigNumber, '2': BigNumber }, IUniswapV2Pair>
  kLast: Call<() => BigNumber, IUniswapV2Pair>
  token0: Call<() => string, IUniswapV2Pair>
  token1: Call<() => string, IUniswapV2Pair>
  totalSupply: Call<() => BigNumber, IUniswapV2Pair>
}

let IUniswapV2PairBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IUniswapV2PairBytecode = '0x';
}

// prettier-ignore
export const IUniswapV2Pair = contract<IUniswapV2Pair>(IUniswapV2PairBytecode)`
  function getReserves() view returns (uint112, uint112, uint32)
  function kLast() view returns (uint256)
  function token0() view returns (address)
  function token1() view returns (address)
  function totalSupply() view returns (uint256)
`;
