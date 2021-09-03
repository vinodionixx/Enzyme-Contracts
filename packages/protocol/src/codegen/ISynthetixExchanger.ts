/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixExchanger extends Contract<ISynthetixExchanger> {
  getAmountsForExchange: Call<(arg0: BigNumberish, arg1: BytesLike, arg2: BytesLike) => { '0': BigNumber, '1': BigNumber, '2': BigNumber }, ISynthetixExchanger>
  settle: Send<(arg0: AddressLike, arg1: BytesLike) => { '0': BigNumber, '1': BigNumber, '2': BigNumber }, ISynthetixExchanger>
}

let ISynthetixExchangerBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixExchangerBytecode = '0x';
}

// prettier-ignore
export const ISynthetixExchanger = contract<ISynthetixExchanger>(ISynthetixExchangerBytecode)`
  function getAmountsForExchange(uint256, bytes32, bytes32) view returns (uint256, uint256, uint256)
  function settle(address, bytes32) returns (uint256, uint256, uint256)
`;
