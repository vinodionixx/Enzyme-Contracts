/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICurveStableSwapSteth extends Contract<ICurveStableSwapSteth> {
  add_liquidity: Send<(arg0: [BigNumberish, BigNumberish], arg1: BigNumberish) => BigNumber, ICurveStableSwapSteth>
  remove_liquidity: Send<(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish]) => [BigNumber, BigNumber], ICurveStableSwapSteth>
  remove_liquidity_one_coin: Send<(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish) => BigNumber, ICurveStableSwapSteth>
}

let ICurveStableSwapStethBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICurveStableSwapStethBytecode = '0x';
}

// prettier-ignore
export const ICurveStableSwapSteth = contract<ICurveStableSwapSteth>(ICurveStableSwapStethBytecode)`
  function add_liquidity(uint256[2], uint256) payable returns (uint256)
  function remove_liquidity(uint256, uint256[2]) returns (uint256[2])
  function remove_liquidity_one_coin(uint256, int128, uint256) returns (uint256)
`;
