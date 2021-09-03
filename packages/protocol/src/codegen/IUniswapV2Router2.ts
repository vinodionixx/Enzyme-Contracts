/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IUniswapV2Router2 extends Contract<IUniswapV2Router2> {
  addLiquidity: Send<(arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, arg5: BigNumberish, arg6: AddressLike, arg7: BigNumberish) => { '0': BigNumber, '1': BigNumber, '2': BigNumber }, IUniswapV2Router2>
  removeLiquidity: Send<(arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, arg5: AddressLike, arg6: BigNumberish) => { '0': BigNumber, '1': BigNumber }, IUniswapV2Router2>
  swapExactTokensForTokens: Send<(arg0: BigNumberish, arg1: BigNumberish, arg2: AddressLike[], arg3: AddressLike, arg4: BigNumberish) => BigNumber[], IUniswapV2Router2>
}

let IUniswapV2Router2Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IUniswapV2Router2Bytecode = '0x';
}

// prettier-ignore
export const IUniswapV2Router2 = contract<IUniswapV2Router2>(IUniswapV2Router2Bytecode)`
  function addLiquidity(address, address, uint256, uint256, uint256, uint256, address, uint256) returns (uint256, uint256, uint256)
  function removeLiquidity(address, address, uint256, uint256, uint256, address, uint256) returns (uint256, uint256)
  function swapExactTokensForTokens(uint256, uint256, address[], address, uint256) returns (uint256[])
`;
