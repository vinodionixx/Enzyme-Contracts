/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type AlphaHomoraV1PriceFeedArgs = [_ibethToken: AddressLike, _wethToken: AddressLike];

// prettier-ignore
export interface AlphaHomoraV1PriceFeed extends Contract<AlphaHomoraV1PriceFeed> {
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, AlphaHomoraV1PriceFeed>
  getIbethToken: Call<() => string, AlphaHomoraV1PriceFeed>
  getWethToken: Call<() => string, AlphaHomoraV1PriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, AlphaHomoraV1PriceFeed>
}

let AlphaHomoraV1PriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  AlphaHomoraV1PriceFeedBytecode =
    '0x60c060405234801561001057600080fd5b506040516105c73803806105c78339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61053a61008d6000398061017e528061022d5250806101a2528061029352806103bd525061053a6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634c252f91146100515780636ea6114914610075578063727212f61461007d5780639be918e614610142575b600080fd5b61005961017c565b604080516001600160a01b039092168252519081900360200190f35b6100596101a0565b6100a96004803603604081101561009357600080fd5b506001600160a01b0381351690602001356101c4565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100ed5781810151838201526020016100d5565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561012c578181015183820152602001610114565b5050505090500194505050505060405180910390f35b6101686004803603602081101561015857600080fd5b50356001600160a01b03166103bb565b604080519115158252519081900360200190f35b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6060806101d0846103bb565b61020b5760405162461bcd60e51b815260040180806020018281038252602d8152602001806104b7602d913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505091507f00000000000000000000000000000000000000000000000000000000000000008260008151811061025957fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050905060007f0000000000000000000000000000000000000000000000000000000000000000905061039a816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102f057600080fd5b505afa158015610304573d6000803e3d6000fd5b505050506040513d602081101561031a57600080fd5b505160408051630daf7b9d60e21b81529051610394916001600160a01b038616916336bdee7491600480820192602092909190829003018186803b15801561036157600080fd5b505afa158015610375573d6000803e3d6000fd5b505050506040513d602081101561038b57600080fd5b505187906103ed565b9061044f565b826000815181106103a757fe5b602002602001018181525050509250929050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6000826103fc57506000610449565b8282028284828161040957fe5b04146104465760405162461bcd60e51b81526004018080602001828103825260218152602001806104e46021913960400191505060405180910390fd5b90505b92915050565b60008082116104a5576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816104ae57fe5b04939250505056fe63616c63556e6465726c79696e6756616c7565733a204f6e6c7920696245544820697320737570706f72746564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212202bd0b8b3fe3885ac06c5c354bfc8d388a30efb1a380026d60319894502acae5864736f6c634300060c0033';
}

// prettier-ignore
export const AlphaHomoraV1PriceFeed = contract<AlphaHomoraV1PriceFeed, AlphaHomoraV1PriceFeedArgs>(AlphaHomoraV1PriceFeedBytecode)`
  constructor(address _ibethToken, address _wethToken)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getIbethToken() view returns (address ibethToken_)
  function getWethToken() view returns (address wethToken_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
`;
