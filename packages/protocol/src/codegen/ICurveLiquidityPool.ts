/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICurveLiquidityPool extends Contract<ICurveLiquidityPool> {
  coins: Call<(arg0: BigNumberish) => string, ICurveLiquidityPool>
  get_virtual_price: Call<() => BigNumber, ICurveLiquidityPool>
}

let ICurveLiquidityPoolBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICurveLiquidityPoolBytecode = '0x';
}

// prettier-ignore
export const ICurveLiquidityPool = contract<ICurveLiquidityPool>(ICurveLiquidityPoolBytecode)`
  function coins(uint256) view returns (address)
  function get_virtual_price() view returns (uint256)
`;
