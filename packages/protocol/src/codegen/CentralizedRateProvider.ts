/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CentralizedRateProviderArgs = [_weth: AddressLike, _maxDeviationPerSender: BigNumberish];

// prettier-ignore
export interface CentralizedRateProvider extends Contract<CentralizedRateProvider> {
  calcLiveAssetValue: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike) => BigNumber, CentralizedRateProvider>
  calcLiveAssetValueRandomized: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike, _maxDeviationPerBlock: BigNumberish) => BigNumber, CentralizedRateProvider>
  calcLiveAssetValueRandomizedByBlockNumber: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike, _maxDeviationPerBlock: BigNumberish) => BigNumber, CentralizedRateProvider>
  calcLiveAssetValueRandomizedBySender: Send<(_baseAsset: AddressLike, _amount: BigNumberish, _quoteAsset: AddressLike) => BigNumber, CentralizedRateProvider>
  getMaxDeviationPerSender: Call<() => BigNumber, CentralizedRateProvider>
  getValueInterpreter: Call<() => string, CentralizedRateProvider>
  owner: Call<() => string, CentralizedRateProvider>
  renounceOwnership: Send<() => void, CentralizedRateProvider>
  setMaxDeviationPerSender: Send<(_maxDeviationPerSender: BigNumberish) => void, CentralizedRateProvider>
  setReleasePriceAddresses: Send<(_valueInterpreter: AddressLike, _aggregateDerivativePriceFeed: AddressLike, _primitivePriceFeed: AddressLike) => void, CentralizedRateProvider>
  transferOwnership: Send<(newOwner: AddressLike) => void, CentralizedRateProvider>
}

let CentralizedRateProviderBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CentralizedRateProviderBytecode =
    '0x60a060405234801561001057600080fd5b50604051610efd380380610efd8339818101604052604081101561003357600080fd5b50805160209091015160006100466100a8565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060015560601b6001600160601b0319166080526100ac565b3390565b60805160601c610e2f6100ce6000398061075d52806108055250610e2f6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063875fb4b311610071578063875fb4b3146101915780638da5cb5b146101b557806393eec813146101bd578063c5c031c9146101c5578063df289021146101fb578063f2fde38b14610233576100a9565b80632b7622bc146100ae57806365011dd1146100fa578063715018a6146101345780637733db7d1461013e5780637cbbe0eb14610174575b600080fd5b6100e8600480360360808110156100c457600080fd5b506001600160a01b0381358116916020810135916040820135169060600135610259565b60408051918252519081900360200190f35b6100e86004803603608081101561011057600080fd5b506001600160a01b038135811691602081013591604082013516906060013561027e565b61013c6102b5565b005b6100e86004803603606081101561015457600080fd5b506001600160a01b03813581169160208101359160409091013516610361565b61013c6004803603602081101561018a57600080fd5b50356108b0565b610199610917565b604080516001600160a01b039092168252519081900360200190f35b610199610926565b6100e8610935565b6100e8600480360360608110156101db57600080fd5b506001600160a01b0381358116916020810135916040909101351661093b565b61013c6004803603606081101561021157600080fd5b506001600160a01b038135811691602081013582169160409091013516610961565b61013c6004803603602081101561024957600080fd5b50356001600160a01b0316610a02565b600080610267868686610361565b9050610274814385610b04565b9695505050505050565b60008061028c868686610361565b9050600061029d8233600154610b44565b90506102aa814386610b04565b979650505050505050565b6102bd610b61565b6001600160a01b03166102ce610926565b6001600160a01b031614610317576040805162461bcd60e51b81526020600482018190526024820152600080516020610dda833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600080846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561039d57600080fd5b505afa1580156103b1573d6000803e3d6000fd5b505050506040513d60208110156103c757600080fd5b50516040805163313ce56760e01b8152905160ff909216600a0a92506000916001600160a01b0386169163313ce567916004808301926020929190829003018186803b15801561041657600080fd5b505afa15801561042a573d6000803e3d6000fd5b505050506040513d602081101561044057600080fd5b50516004805460408051634df48c7360e11b81526001600160a01b0389811694820194909452905160ff909416600a0a9450911691639be918e691602480820192602092909190829003018186803b15801561049b57600080fd5b505afa1580156104af573d6000803e3d6000fd5b505050506040513d60208110156104c557600080fd5b50511561055c5760025460408051637733db7d60e01b81526001600160a01b0389811660048301526024820189905287811660448301528251931692637733db7d926064808401939192918290030181600087803b15801561052657600080fd5b505af115801561053a573d6000803e3d6000fd5b505050506040513d604081101561055057600080fd5b505192506108a9915050565b600460009054906101000a90046001600160a01b03166001600160a01b0316639be918e6876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156105be57600080fd5b505afa1580156105d2573d6000803e3d6000fd5b505050506040513d60208110156105e857600080fd5b505115610733576000600260009054906101000a90046001600160a01b03166001600160a01b0316637733db7d86876001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561064f57600080fd5b505afa158015610663573d6000803e3d6000fd5b505050506040513d602081101561067957600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03938416600482015260ff909216600a0a6024830152918b1660448201528151606480830193928290030181600087803b1580156106d457600080fd5b505af11580156106e8573d6000803e3d6000fd5b505050506040513d60408110156106fe57600080fd5b505190506000610718826107128686610b65565b90610bc7565b9050610728846107128984610b65565b9450505050506108a9565b60025460408051637733db7d60e01b81526001600160a01b038981166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000008116604483015282516000949190911692637733db7d926064808201939182900301818787803b1580156107af57600080fd5b505af11580156107c3573d6000803e3d6000fd5b505050506040513d60408110156107d957600080fd5b505160025460408051637733db7d60e01b81526001600160a01b038981166004830152602482018790527f0000000000000000000000000000000000000000000000000000000000000000811660448301528251949550600094931692637733db7d9260648084019391929182900301818787803b15801561085a57600080fd5b505af115801561086e573d6000803e3d6000fd5b505050506040513d604081101561088457600080fd5b505190506108a28461071283818761089c8d89610b65565b90610b65565b9450505050505b9392505050565b6108b8610b61565b6001600160a01b03166108c9610926565b6001600160a01b031614610912576040805162461bcd60e51b81526020600482018190526024820152600080516020610dda833981519152604482015290519081900360640190fd5b600155565b6002546001600160a01b031690565b6000546001600160a01b031690565b60015490565b600080610949858585610361565b90506109588133600154610b44565b95945050505050565b610969610b61565b6001600160a01b031661097a610926565b6001600160a01b0316146109c3576040805162461bcd60e51b81526020600482018190526024820152600080516020610dda833981519152604482015290519081900360640190fd5b600280546001600160a01b039485166001600160a01b031991821617909155600380549385169382169390931790925560048054919093169116179055565b610a0a610b61565b6001600160a01b0316610a1b610926565b6001600160a01b031614610a64576040805162461bcd60e51b81526020600482018190526024820152600080516020610dda833981519152604482015290519081900360640190fd5b6001600160a01b038116610aa95760405162461bcd60e51b8152600401808060200182810382526026815260200180610d936026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080610b3760646107128561089c610b216028828b6003610c2e565b610b31601461089c8c6002610c2e565b90610c95565b9050610958858285610cef565b600080610b3760646107128561089c6101008360ff8b1686610b65565b3390565b600082610b7457506000610bc1565b82820282848281610b8157fe5b0414610bbe5760405162461bcd60e51b8152600401808060200182810382526021815260200180610db96021913960400191505060405180910390fd5b90505b92915050565b6000808211610c1d576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610c2657fe5b049392505050565b6000808211610c84576040805162461bcd60e51b815260206004820152601860248201527f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000604482015290519081900360640190fd5b818381610c8d57fe5b069392505050565b600082820183811015610bbe576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000610d2d610d0360646107128786610b65565b610d27610d206064610712610d1960028a610b65565b8a90610b65565b8790610c95565b90610d35565b949350505050565b600082821115610d8c576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122097d2907a6b211768fe101f7904b07329d54f961b8e5188d603933f6826947cdf64736f6c634300060c0033';
}

// prettier-ignore
export const CentralizedRateProvider = contract<CentralizedRateProvider, CentralizedRateProviderArgs>(CentralizedRateProviderBytecode)`
  constructor(address _weth, uint256 _maxDeviationPerSender)
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
  function calcLiveAssetValue(address _baseAsset, uint256 _amount, address _quoteAsset) returns (uint256 value_)
  function calcLiveAssetValueRandomized(address _baseAsset, uint256 _amount, address _quoteAsset, uint256 _maxDeviationPerBlock) returns (uint256 value_)
  function calcLiveAssetValueRandomizedByBlockNumber(address _baseAsset, uint256 _amount, address _quoteAsset, uint256 _maxDeviationPerBlock) returns (uint256 value_)
  function calcLiveAssetValueRandomizedBySender(address _baseAsset, uint256 _amount, address _quoteAsset) returns (uint256 value_)
  function getMaxDeviationPerSender() view returns (uint256 maxDeviationPerSender_)
  function getValueInterpreter() view returns (address valueInterpreter_)
  function owner() view returns (address)
  function renounceOwnership()
  function setMaxDeviationPerSender(uint256 _maxDeviationPerSender)
  function setReleasePriceAddresses(address _valueInterpreter, address _aggregateDerivativePriceFeed, address _primitivePriceFeed)
  function transferOwnership(address newOwner)
`;
