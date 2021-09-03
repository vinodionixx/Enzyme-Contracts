/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IChainlinkAggregator extends Contract<IChainlinkAggregator> {
  latestAnswer: Call<() => BigNumber, IChainlinkAggregator>
  latestTimestamp: Call<() => BigNumber, IChainlinkAggregator>
}

let IChainlinkAggregatorBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IChainlinkAggregatorBytecode = '0x';
}

// prettier-ignore
export const IChainlinkAggregator = contract<IChainlinkAggregator>(IChainlinkAggregatorBytecode)`
  function latestAnswer() view returns (int256)
  function latestTimestamp() view returns (uint256)
`;
