/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type MockChainlinkPriceSourceArgs = [_decimals: BigNumberish];

// prettier-ignore
export interface MockChainlinkPriceSource extends Contract<MockChainlinkPriceSource> {
  DECIMALS: Call<() => BigNumber, MockChainlinkPriceSource>
  aggregator: Call<() => string, MockChainlinkPriceSource>
  decimals: Call<() => BigNumber, MockChainlinkPriceSource>
  latestAnswer: Call<() => BigNumber, MockChainlinkPriceSource>
  latestTimestamp: Call<() => BigNumber, MockChainlinkPriceSource>
  roundId: Call<() => BigNumber, MockChainlinkPriceSource>
  setAggregator: Send<(_nextAggregator: AddressLike) => void, MockChainlinkPriceSource>
  setLatestAnswer: Send<(_nextAnswer: BigNumberish, _nextTimestamp: BigNumberish) => void, MockChainlinkPriceSource>
}

let MockChainlinkPriceSourceBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockChainlinkPriceSourceBytecode =
    '0x608060405234801561001057600080fd5b506040516102743803806102748339818101604052602081101561003357600080fd5b50516000819055600a0a600190815542600255600355600480546001600160a01b0319163017905561020a8061006a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638205bf6a1161005b5780638205bf6a146100db5780638cd221c9146100e3578063e9c58f85146100eb578063f9120af61461011057610088565b8063245a7bfc1461008d5780632e0f2625146100b1578063313ce567146100cb57806350d25bcd146100d3575b600080fd5b610095610136565b604080516001600160a01b039092168252519081900360200190f35b6100b9610145565b60408051918252519081900360200190f35b6100b961014b565b6100b9610151565b6100b9610157565b6100b961015d565b61010e6004803603604081101561010157600080fd5b5080359060200135610163565b005b61010e6004803603602081101561012657600080fd5b50356001600160a01b03166101b2565b6004546001600160a01b031681565b60005481565b60005490565b60015481565b60025481565b60035481565b60018281556002829055600380549091019081905560408051838152905184917f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f919081900360200190a35050565b600480546001600160a01b0319166001600160a01b039290921691909117905556fea2646970667358221220c991b82559d8eda6fcbc07795a682b3e77079073f1a0f96e1950b3aaa88dd51564736f6c634300060c0033';
}

// prettier-ignore
export const MockChainlinkPriceSource = contract<MockChainlinkPriceSource, MockChainlinkPriceSourceArgs>(MockChainlinkPriceSourceBytecode)`
  constructor(uint256 _decimals)
  event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 timestamp)
  function DECIMALS() view returns (uint256)
  function aggregator() view returns (address)
  function decimals() view returns (uint256)
  function latestAnswer() view returns (int256)
  function latestTimestamp() view returns (uint256)
  function roundId() view returns (uint256)
  function setAggregator(address _nextAggregator)
  function setLatestAnswer(int256 _nextAnswer, uint256 _nextTimestamp)
`;
