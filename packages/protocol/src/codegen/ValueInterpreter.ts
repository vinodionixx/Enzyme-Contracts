/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ValueInterpreterArgs = [_primitivePriceFeed: AddressLike, _aggregatedDerivativePriceFeed: AddressLike];

// prettier-ignore
export interface ValueInterpreter extends Contract<ValueInterpreter> {
  calcCanonicalAssetValue: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike) => { value_: BigNumber, isValid_: boolean }, ValueInterpreter>
  calcCanonicalAssetsTotalValue: Send<(_baseAssets: AddressLike[], _amounts: BigNumberish[], _quoteAsset: AddressLike) => { value_: BigNumber, isValid_: boolean }, ValueInterpreter>
  calcLiveAssetValue: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike) => { value_: BigNumber, isValid_: boolean }, ValueInterpreter>
  calcLiveAssetsTotalValue: Send<(_baseAssets: AddressLike[], _amounts: BigNumberish[], _quoteAsset: AddressLike) => { value_: BigNumber, isValid_: boolean }, ValueInterpreter>
  getAggregatedDerivativePriceFeed: Call<() => string, ValueInterpreter>
  getPrimitivePriceFeed: Call<() => string, ValueInterpreter>
}

let ValueInterpreterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ValueInterpreterBytecode =
    '0x60c060405234801561001057600080fd5b50604051610de8380380610de88339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606091821b811660805291901b1660a05260805160601c60a05160601c610d506100986000398061030f5280610364528061054552806106bb5280610788525080610450528061080d5250610d506000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806349be72f3146100675780634c67e1061461008b5780635d880c7d146100da5780637733db7d146100e2578063ae3be7f414610118578063ae6f52ad146101df575b600080fd5b61006f61030d565b604080516001600160a01b039092168252519081900360200190f35b6100c1600480360360608110156100a157600080fd5b506001600160a01b03813581169160208101359160409091013516610331565b6040805192835290151560208301528051918290030190f35b61006f61044e565b6100c1600480360360608110156100f857600080fd5b506001600160a01b03813581169160208101359160409091013516610472565b6100c16004803603606081101561012e57600080fd5b810190602081018135600160201b81111561014857600080fd5b82018360208201111561015a57600080fd5b803590602001918460208302840111600160201b8311171561017b57600080fd5b919390929091602081019035600160201b81111561019857600080fd5b8201836020820111156101aa57600080fd5b803590602001918460208302840111600160201b831117156101cb57600080fd5b9193509150356001600160a01b0316610480565b6100c1600480360360608110156101f557600080fd5b810190602081018135600160201b81111561020f57600080fd5b82018360208201111561022157600080fd5b803590602001918460208302840111600160201b8311171561024257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561029157600080fd5b8201836020820111156102a357600080fd5b803590602001918460208302840111600160201b831117156102c457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506105009050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600080826001600160a01b0316856001600160a01b03161480610352575083155b1561036257508290506001610446565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639be918e6846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103cf57600080fd5b505afa1580156103e3573d6000803e3d6000fd5b505050506040513d60208110156103f957600080fd5b50516104365760405162461bcd60e51b8152600401808060200182810382526030815260200180610ceb6030913960400191505060405180910390fd5b610441858585610688565b915091505b935093915050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600080610441858585610331565b6000806104f287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808b0282810182019093528a82529093508a925089918291850190849080828437600092019190915250889250610500915050565b915091509550959350505050565b60008083518551146105435760405162461bcd60e51b8152600401808060200182810382526035815260200180610c696035913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639be918e6846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156105b057600080fd5b505afa1580156105c4573d6000803e3d6000fd5b505050506040513d60208110156105da57600080fd5b50516106175760405162461bcd60e51b8152600401808060200182810382526036815260200180610c066036913960400191505060405180910390fd5b50600160005b855181101561067f5760008061065a88848151811061063857fe5b602002602001015188858151811061064c57fe5b602002602001015188610688565b90925090506106698583610902565b94508061067557600093505b505060010161061d565b50935093915050565b600080826001600160a01b0316856001600160a01b031614806106a9575083155b156106b957508290506001610446565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639be918e6866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d602081101561075057600080fd5b5051156108095760408051630372a91f60e31b81526001600160a01b03878116600483015260248201879052858116604483015282517f000000000000000000000000000000000000000000000000000000000000000090911692631b9548f89260648082019391829003018186803b1580156107cc57600080fd5b505afa1580156107e0573d6000803e3d6000fd5b505050506040513d60408110156107f657600080fd5b5080516020909101519092509050610446565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166368e81c6d876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561087857600080fd5b505afa15801561088c573d6000803e3d6000fd5b505050506040513d60208110156108a257600080fd5b505190506001600160a01b038116156108cb576108c181878787610963565b9250925050610446565b60405162461bcd60e51b8152600401808060200182810382526028815260200180610cc36028913960400191505060405180910390fd5b60008282018381101561095c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600080606080876001600160a01b031663727212f688886040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156109c057600080fd5b505af11580156109d4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160409081528110156109fd57600080fd5b8101908080516040519392919084600160201b821115610a1c57600080fd5b908301906020820185811115610a3157600080fd5b82518660208202830111600160201b82111715610a4d57600080fd5b82525081516020918201928201910280838360005b83811015610a7a578181015183820152602001610a62565b5050505090500160405260200180516040519392919084600160201b821115610aa257600080fd5b908301906020820185811115610ab757600080fd5b82518660208202830111600160201b82111715610ad357600080fd5b82525081516020918201928201910280838360005b83811015610b00578181015183820152602001610ae8565b50505050905001604052505050915091506000825111610b515760405162461bcd60e51b8152600401808060200182810382526025815260200180610c9e6025913960400191505060405180910390fd5b8051825114610b915760405162461bcd60e51b815260040180806020018281038252602d815260200180610c3c602d913960400191505060405180910390fd5b6001925060005b8251811015610bf957600080610bd5858481518110610bb357fe5b6020026020010151858581518110610bc757fe5b60200260200101518a610688565b9150915080610be357600095505b610bed8783610902565b96505050600101610b98565b5050509450949250505056fe63616c6343616e6f6e6963616c417373657473546f74616c56616c75653a20556e737570706f72746564205f71756f746541737365745f5f63616c634465726976617469766556616c75653a2041727261797320756e657175616c206c656e6774687363616c6343616e6f6e6963616c417373657473546f74616c56616c75653a2041727261797320756e657175616c206c656e677468735f5f63616c634465726976617469766556616c75653a204e6f20756e6465726c79696e67735f5f63616c63417373657456616c75653a20556e737570706f72746564205f62617365417373657463616c6343616e6f6e6963616c417373657456616c75653a20556e737570706f72746564205f71756f74654173736574a2646970667358221220d54cff4486da6cdb94727f6142a5d1cf834580def80a52407896b0bfdf6f4ccf64736f6c634300060c0033';
}

// prettier-ignore
export const ValueInterpreter = contract<ValueInterpreter, ValueInterpreterArgs>(ValueInterpreterBytecode)`
  constructor(address _primitivePriceFeed, address _aggregatedDerivativePriceFeed)
  function calcCanonicalAssetValue(address _baseAsset, uint256 _amount, address _quoteAsset) returns (uint256 value_, bool isValid_)
  function calcCanonicalAssetsTotalValue(address[] _baseAssets, uint256[] _amounts, address _quoteAsset) returns (uint256 value_, bool isValid_)
  function calcLiveAssetValue(address _baseAsset, uint256 _amount, address _quoteAsset) returns (uint256 value_, bool isValid_)
  function calcLiveAssetsTotalValue(address[] _baseAssets, uint256[] _amounts, address _quoteAsset) returns (uint256 value_, bool isValid_)
  function getAggregatedDerivativePriceFeed() view returns (address aggregatedDerivativePriceFeed_)
  function getPrimitivePriceFeed() view returns (address primitivePriceFeed_)
`;
