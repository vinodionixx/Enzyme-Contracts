/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICurveLiquidityGaugeV2 extends Contract<ICurveLiquidityGaugeV2> {
  claim_rewards: Send<(arg0: AddressLike) => void, ICurveLiquidityGaugeV2>
  deposit: Send<(arg0: BigNumberish, arg1: AddressLike) => void, ICurveLiquidityGaugeV2>
  reward_tokens: Call<(arg0: BigNumberish) => string, ICurveLiquidityGaugeV2>
  withdraw: Send<(arg0: BigNumberish) => void, ICurveLiquidityGaugeV2>
}

let ICurveLiquidityGaugeV2Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICurveLiquidityGaugeV2Bytecode = '0x';
}

// prettier-ignore
export const ICurveLiquidityGaugeV2 = contract<ICurveLiquidityGaugeV2>(ICurveLiquidityGaugeV2Bytecode)`
  function claim_rewards(address)
  function deposit(uint256, address)
  function reward_tokens(uint256) view returns (address)
  function withdraw(uint256)
`;
