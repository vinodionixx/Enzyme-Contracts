/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CurvePriceFeedArgs = [_fundDeployer: AddressLike, _addressProvider: AddressLike];

// prettier-ignore
export interface CurvePriceFeed extends Contract<CurvePriceFeed> {
  addDerivatives: Send<(_derivatives: AddressLike[], _invariantProxyAssets: AddressLike[]) => void, CurvePriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, CurvePriceFeed>
  getAddressProvider: Call<() => string, CurvePriceFeed>
  getDerivativeInfo: Call<(_derivative: AddressLike) => { pool: string, invariantProxyAsset: string, invariantProxyAssetDecimals: BigNumber }, CurvePriceFeed>
  getFundDeployer: Call<() => string, CurvePriceFeed>
  getOwner: Call<() => string, CurvePriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, CurvePriceFeed>
  removeDerivatives: Send<(_derivatives: AddressLike[]) => void, CurvePriceFeed>
}

let CurvePriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CurvePriceFeedBytecode =
    '0x60c06040523480156200001157600080fd5b506040516200174438038062001744833981016040819052620000349162000066565b6001600160601b0319606092831b8116608052911b1660a052620000d1565b80516200006081620000b7565b92915050565b600080604083850312156200007a57600080fd5b600062000088858562000053565b92505060206200009b8582860162000053565b9150509250929050565b60006001600160a01b03821662000060565b620000c281620000a5565b8114620000ce57600080fd5b50565b60805160601c60a05160601c61163f62000105600039806102115280610ca4525080610a345280610c60525061163f6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638f72b1361161005b5780638f72b1361461010157806397c0ac87146101145780639be918e61461011c578063f8c689341461013c57610088565b80630bad9a171461008d57806339cbb63c146100b6578063727212f6146100cb578063893d20e8146100ec575b600080fd5b6100a061009b366004610dd4565b610144565b6040516100ad919061158c565b60405180910390f35b6100c96100c4366004610e94565b610190565b005b6100de6100d9366004610e18565b6107d4565b6040516100ad929190611479565b6100f4610a30565b6040516100ad919061146b565b6100c961010f366004610e52565b610ac8565b6100f4610c5e565b61012f61012a366004610dd4565b610c82565b6040516100ad919061149e565b6100f4610ca2565b61014c610d3b565b506001600160a01b03908116600090815260208181526040918290208251606081018452815485168152600182015490941691840191909152600201549082015290565b610198610a30565b6001600160a01b0316336001600160a01b0316146101d15760405162461bcd60e51b81526004016101c8906114cc565b60405180910390fd5b826101ee5760405162461bcd60e51b81526004016101c89061152c565b82811461020d5760405162461bcd60e51b81526004016101c8906114fc565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a262904b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561026857600080fd5b505afa15801561027c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a09190610dfa565b905060005b848110156107cc5760008686838181106102bb57fe5b90506020020160208101906102d09190610dd4565b6001600160a01b031614156102f75760405162461bcd60e51b81526004016101c89061157c565b600084848381811061030557fe5b905060200201602081019061031a9190610dd4565b6001600160a01b031614156103415760405162461bcd60e51b81526004016101c89061153c565b61036586868381811061035057fe5b905060200201602081019061012a9190610dd4565b156103825760405162461bcd60e51b81526004016101c8906114ec565b6000826001600160a01b031663bdf475c388888581811061039f57fe5b90506020020160208101906103b49190610dd4565b6040518263ffffffff1660e01b81526004016103d0919061146b565b60206040518083038186803b1580156103e857600080fd5b505afa1580156103fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104209190610dfa565b90506001600160a01b03811661056457826001600160a01b031663bdf475c388888581811061044b57fe5b90506020020160208101906104609190610dd4565b6001600160a01b03166382c630666040518163ffffffff1660e01b815260040160206040518083038186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d09190610dfa565b6040518263ffffffff1660e01b81526004016104ec919061146b565b60206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190610dfa565b90506001600160a01b0381166105645760405162461bcd60e51b81526004016101c8906114dc565b600085858481811061057257fe5b90506020020160208101906105879190610dd4565b6001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156105bf57600080fd5b505afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190610f22565b60ff1690506040518060600160405280836001600160a01b0316815260200187878681811061062257fe5b90506020020160208101906106379190610dd4565b6001600160a01b031681526020018290526000808a8a8781811061065757fe5b905060200201602081019061066c9190610dd4565b6001600160a01b0390811682526020808301939093526040918201600020845181549083166001600160a01b031991821617825593850151600182018054919093169416939093179055919091015160029091015560606106f58989868181106106d257fe5b90506020020160208101906106e79190610dd4565b670de0b6b3a76400006107d4565b91505060008160008151811061070757fe5b60200260200101511161072c5760405162461bcd60e51b81526004016101c89061156c565b86868581811061073857fe5b905060200201602081019061074d9190610dd4565b6001600160a01b0316836001600160a01b03168a8a8781811061076c57fe5b90506020020160208101906107819190610dd4565b6001600160a01b03167f609e0cbea48ceadc5f9f75d0320d1093fd97d101190895000da6d3e095ec5352856040516107b9919061159a565b60405180910390a45050506001016102a5565b505050505050565b6060806107df610d3b565b506001600160a01b03808516600090815260208181526040918290208251606081018452815485168082526001830154909516928101929092526002015491810191909152906108415760405162461bcd60e51b81526004016101c8906114ac565b604080516001808252818301909252906020808301908036833701905050925080602001518360008151811061087357fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050915080604001516012141561096557610947670de0b6b3a764000061094183600001516001600160a01b031663bb7b8b806040518163ffffffff1660e01b815260040160206040518083038186803b15801561090257600080fd5b505afa158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a9190610f04565b8790610cc6565b90610d09565b8260008151811061095457fe5b602002602001018181525050610a27565b610a0d670de0b6b3a7640000610941670de0b6b3a76400006109418560400151600a0a610a0787600001516001600160a01b031663bb7b8b806040518163ffffffff1660e01b815260040160206040518083038186803b1580156109c857600080fd5b505afa1580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a009190610f04565b8b90610cc6565b90610cc6565b82600081518110610a1a57fe5b6020026020010181815250505b505b9250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8b57600080fd5b505afa158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac39190610dfa565b905090565b610ad0610a30565b6001600160a01b0316336001600160a01b031614610b005760405162461bcd60e51b81526004016101c8906114cc565b80610b1d5760405162461bcd60e51b81526004016101c8906114bc565b60005b81811015610c59576000838383818110610b3657fe5b9050602002016020810190610b4b9190610dd4565b6001600160a01b03161415610b725760405162461bcd60e51b81526004016101c89061154c565b610b8183838381811061035057fe5b610b9d5760405162461bcd60e51b81526004016101c89061155c565b600080848484818110610bac57fe5b9050602002016020810190610bc19190610dd4565b6001600160a01b031681526020810191909152604001600090812080546001600160a01b03199081168255600182018054909116905560020155828282818110610c0757fe5b9050602002016020810190610c1c9190610dd4565b6001600160a01b03167fc15eb25d807b570f4567baf6e97c7b26d58a7d0512dc85e8db15375a056b860460405160405180910390a2600101610b20565b505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b0390811660009081526020819052604090205416151590565b7f000000000000000000000000000000000000000000000000000000000000000090565b600082610cd557506000610d03565b82820282848281610ce257fe5b0414610d005760405162461bcd60e51b81526004016101c89061151c565b90505b92915050565b6000808211610d2a5760405162461bcd60e51b81526004016101c89061150c565b818381610d3357fe5b049392505050565b604080516060810182526000808252602082018190529181019190915290565b8035610d03816115e0565b8051610d03816115e0565b60008083601f840112610d8357600080fd5b50813567ffffffffffffffff811115610d9b57600080fd5b602083019150836020820283011115610a2957600080fd5b8035610d03816115f7565b8051610d03816115f7565b8051610d0381611600565b600060208284031215610de657600080fd5b6000610df28484610d5b565b949350505050565b600060208284031215610e0c57600080fd5b6000610df28484610d66565b60008060408385031215610e2b57600080fd5b6000610e378585610d5b565b9250506020610e4885828601610db3565b9150509250929050565b60008060208385031215610e6557600080fd5b823567ffffffffffffffff811115610e7c57600080fd5b610e8885828601610d71565b92509250509250929050565b60008060008060408587031215610eaa57600080fd5b843567ffffffffffffffff811115610ec157600080fd5b610ecd87828801610d71565b9450945050602085013567ffffffffffffffff811115610eec57600080fd5b610ef887828801610d71565b95989497509550505050565b600060208284031215610f1657600080fd5b6000610df28484610dbe565b600060208284031215610f3457600080fd5b6000610df28484610dc9565b6000610f4c8383610f60565b505060200190565b6000610f4c8383611462565b610f69816115bb565b82525050565b6000610f7a826115ae565b610f8481856115b2565b9350610f8f836115a8565b8060005b83811015610fbd578151610fa78882610f40565b9750610fb2836115a8565b925050600101610f93565b509495945050505050565b6000610fd3826115ae565b610fdd81856115b2565b9350610fe8836115a8565b8060005b83811015610fbd5781516110008882610f54565b975061100b836115a8565b925050600101610fec565b610f69816115c6565b600061102c6032836115b2565b7f63616c63556e6465726c79696e6756616c7565733a205f64657269766174697681527119481a5cc81b9bdd081cdd5c1c1bdc9d195960721b602082015260400192915050565b60006110806025836115b2565b7f72656d6f766544657269766174697665733a20456d707479205f646572697661815264746976657360d81b602082015260400192915050565b60006110c76049836115b2565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b6000611138603d836115b2565b7f61646444657269766174697665733a204e6f7420612076616c6964204c50207481527f6f6b656e206f72206c697175696469747920676175676520746f6b656e000000602082015260400192915050565b60006111976021836115b2565b7f61646444657269766174697665733a2056616c756520616c72656164792073658152601d60fa1b602082015260400192915050565b60006111da601e836115b2565b7f61646444657269766174697665733a20556e657175616c206172726179730000815260200192915050565b6000611213601a836115b2565b7f536166654d6174683a206469766973696f6e206279207a65726f000000000000815260200192915050565b600061124c6021836115b2565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b600061128f6022836115b2565b7f61646444657269766174697665733a20456d707479205f646572697661746976815261657360f01b602082015260400192915050565b60006112d36029836115b2565b7f61646444657269766174697665733a20456d70747920696e76617269616e74508152681c9bde1e505cdcd95d60ba1b602082015260400192915050565b600061131e6023836115b2565b7f72656d6f766544657269766174697665733a20456d707479206465726976617481526269766560e81b602082015260400192915050565b60006113636023836115b2565b7f72656d6f766544657269766174697665733a2056616c7565206973206e6f74208152621cd95d60ea1b602082015260400192915050565b60006113a8602f836115b2565b7f61646444657269766174697665733a20636f756c64206e6f742063616c63756c81526e6174652076616c696420707269636560881b602082015260400192915050565b60006113f96020836115b2565b7f61646444657269766174697665733a20456d7074792064657269766174697665815260200192915050565b805160608301906114368482610f60565b5060208201516114496020850182610f60565b50604082015161145c6040850182611462565b50505050565b610f69816115d7565b60208101610d038284610f60565b6040808252810161148a8185610f6f565b90508181036020830152610df28184610fc8565b60208101610d038284611016565b60208082528101610d038161101f565b60208082528101610d0381611073565b60208082528101610d03816110ba565b60208082528101610d038161112b565b60208082528101610d038161118a565b60208082528101610d03816111cd565b60208082528101610d0381611206565b60208082528101610d038161123f565b60208082528101610d0381611282565b60208082528101610d03816112c6565b60208082528101610d0381611311565b60208082528101610d0381611356565b60208082528101610d038161139b565b60208082528101610d03816113ec565b60608101610d038284611425565b60208101610d038284611462565b60200190565b5190565b90815260200190565b6000610d03826115cb565b151590565b6001600160a01b031690565b90565b60ff1690565b6115e9816115bb565b81146115f457600080fd5b50565b6115e9816115d7565b6115e9816115da56fea26469706673582212209af6177c2c99f2a643a5acce0ccafc5258abb249c1a27b9502589ccf4e432be564736f6c634300060c0033';
}

// prettier-ignore
export const CurvePriceFeed = contract<CurvePriceFeed, CurvePriceFeedArgs>(CurvePriceFeedBytecode)`
  constructor(address _fundDeployer, address _addressProvider)
  event DerivativeAdded(address indexed derivative, address indexed pool, address indexed invariantProxyAsset, uint256 invariantProxyAssetDecimals)
  event DerivativeRemoved(address indexed derivative)
  function addDerivatives(address[] _derivatives, address[] _invariantProxyAssets)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getAddressProvider() view returns (address addressProvider_)
  function getDerivativeInfo(address _derivative) view returns (tuple(address pool, address invariantProxyAsset, uint256 invariantProxyAssetDecimals) derivativeInfo_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
  function removeDerivatives(address[] _derivatives)
`;
