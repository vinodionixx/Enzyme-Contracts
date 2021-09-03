/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type YearnVaultV2AdapterArgs = [_integrationManager: AddressLike, _yearnVaultV2PriceFeed: AddressLike];

// prettier-ignore
export interface YearnVaultV2Adapter extends Contract<YearnVaultV2Adapter> {
  ADD_TRACKED_ASSETS_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  APPROVE_ASSETS_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  CLAIM_REWARDS_AND_REINVEST_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  CLAIM_REWARDS_AND_SWAP_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  CLAIM_REWARDS_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  LEND_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  REDEEM_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  STAKE_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  TAKE_ORDER_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  UNSTAKE_SELECTOR: Call<() => string, YearnVaultV2Adapter>
  getIntegrationManager: Call<() => string, YearnVaultV2Adapter>
  getYearnVaultV2PriceFeed: Call<() => string, YearnVaultV2Adapter>
  identifier: Call<() => string, YearnVaultV2Adapter>
  lend: Send<(_vaultProxy: AddressLike, arg1: BytesLike, _encodedAssetTransferArgs: BytesLike) => void, YearnVaultV2Adapter>
  parseAssetsForMethod: Call<(_selector: BytesLike, _encodedCallArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, YearnVaultV2Adapter>
  redeem: Send<(_vaultProxy: AddressLike, _encodedCallArgs: BytesLike, _encodedAssetTransferArgs: BytesLike) => void, YearnVaultV2Adapter>
}

let YearnVaultV2AdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  YearnVaultV2AdapterBytecode =
    '0x60c060405234801561001057600080fd5b506040516118f03803806118f08339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61186861008860003980610a585250806105c252806108dd5280610a1052506118686000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063863e5ad0116100a2578063e4d9047811610071578063e4d904781461054f578063e7c4569014610557578063f07539941461057b578063f702e0ea14610583578063f7d882b51461058b57610116565b8063863e5ad014610469578063b23228cf14610471578063c29fa9dd14610479578063e27a06b51461054757610116565b80633ffc1591116100e95780633ffc15911461022057806340da225d146102285780635ca62b3c1461023057806376cc7ac6146102385780637998a1c4146103ec57610116565b8063080456c11461011b578063099f751514610140578063131461c014610210578063257cb1a314610218575b600080fd5b610123610593565b604080516001600160e01b03199092168252519081900360200190f35b61020e6004803603606081101561015657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111600160201b831117156101b357600080fd5b919390929091602081019035600160201b8111156101d057600080fd5b8201836020820111156101e257600080fd5b803590602001918460018302840111600160201b8311171561020357600080fd5b5090925090506105b7565b005b610123610710565b610123610734565b610123610758565b61012361077c565b6101236107a0565b6102b76004803603604081101561024e57600080fd5b6001600160e01b03198235169190810190604081016020820135600160201b81111561027957600080fd5b82018360208201111561028b57600080fd5b803590602001918460018302840111600160201b831117156102ac57600080fd5b5090925090506107c4565b604051808660038111156102c757fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156103145781810151838201526020016102fc565b50505050905001858103845288818151815260200191508051906020019060200280838360005b8381101561035357818101518382015260200161033b565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561039257818101518382015260200161037a565b50505050905001858103825286818151815260200191508051906020019060200280838360005b838110156103d15781810151838201526020016103b9565b50505050905001995050505050505050505060405180910390f35b6103f4610862565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561042e578181015183820152602001610416565b50505050905090810190601f16801561045b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61012361088a565b6101236108ae565b61020e6004803603606081101561048f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156104b957600080fd5b8201836020820111156104cb57600080fd5b803590602001918460018302840111600160201b831117156104ec57600080fd5b919390929091602081019035600160201b81111561050957600080fd5b82018360208201111561051b57600080fd5b803590602001918460018302840111600160201b8311171561053c57600080fd5b5090925090506108d2565b6101236109c6565b6101236109ea565b61055f610a0e565b604080516001600160a01b039092168252519081900360200190f35b610123610a32565b61055f610a56565b610123610a7a565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461061e5760405162461bcd60e51b81526004018080602001828103825260328152602001806117796032913960400191505060405180910390fd5b8482828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f880181900481028201810190925286815260609350839250829161069a91908990899081908401838280828437600092019190915250610a9e92505050565b935093509350506106e98a826000815181106106b257fe5b6020026020010151856000815181106106c757fe5b6020026020010151856000815181106106dc57fe5b6020026020010151610c66565b50505060606106f782610a9e565b50509150506107068382610cfa565b5050505050505050565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7fdfd5ee0f6067928bf85a7c4430811282840bc99332dda3dab462c02bf95b67cc81565b600060608080806001600160e01b0319881663099f751560e01b14156107fd576107ee8787610ddb565b94509450945094509450610857565b6001600160e01b0319881663c29fa9dd60e01b1415610820576107ee8787610f8e565b60405162461bcd60e51b815260040180806020018281038252602781526020018061172c6027913960400191505060405180910390fd5b939792965093509350565b60408051808201909152600e81526d2ca2a0a9272fab20aaa62a2fab1960911b602082015290565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109395760405162461bcd60e51b81526004018080602001828103825260328152602001806117796032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a81529194508493508392506109b391908b908b90819084018382808284376000920191909152506110e092505050565b935050925092506106e98a84848461111d565b7f848f3a590fb2f9795d1a275009c54c26c53833277c96b90e0ddd01753a1d590681565b7f3377e18acf9e83665eacd6af109261424fca32a298e2fc2e6095ba563fb8390e81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f1d51f49b5273d9ddbb643dc349fab8d36dbb470209c2ea71033bea49dd311c2781565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b60006060806060848060200190516080811015610aba57600080fd5b815160208301805160405192949293830192919084600160201b821115610ae057600080fd5b908301906020820185811115610af557600080fd5b82518660208202830111600160201b82111715610b1157600080fd5b82525081516020918201928201910280838360005b83811015610b3e578181015183820152602001610b26565b5050505090500160405260200180516040519392919084600160201b821115610b6657600080fd5b908301906020820185811115610b7b57600080fd5b82518660208202830111600160201b82111715610b9757600080fd5b82525081516020918201928201910280838360005b83811015610bc4578181015183820152602001610bac565b5050505090500160405260200180516040519392919084600160201b821115610bec57600080fd5b908301906020820185811115610c0157600080fd5b82518660208202830111600160201b82111715610c1d57600080fd5b82525081516020918201928201910280838360005b83811015610c4a578181015183820152602001610c32565b5050505090500160405250505093509350935093509193509193565b610c7182848361117c565b826001600160a01b0316636e553f6582866040518363ffffffff1660e01b815260040180838152602001826001600160a01b0316815260200192505050602060405180830381600087803b158015610cc857600080fd5b505af1158015610cdc573d6000803e3d6000fd5b505050506040513d6020811015610cf257600080fd5b505050505050565b60005b8151811015610dd6576000828281518110610d1457fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d6857600080fd5b505afa158015610d7c573d6000803e3d6000fd5b505050506040513d6020811015610d9257600080fd5b505190508015610dcd57610dcd8482858581518110610dad57fe5b60200260200101516001600160a01b03166112149092919063ffffffff16565b50600101610cfd565b505050565b60006060806060806000806000610e278a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126692505050565b9250925092506000610e388461129a565b90506001600160a01b038116610e7f5760405162461bcd60e51b81526004018080602001828103825260288152602001806117ab6028913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505097508088600081518110610ead57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505096508287600081518110610ef157fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508386600081518110610f2c57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505094508185600081518110610f7057fe5b60200260200101818152505060029850505050509295509295909350565b60006060806060806000806000610fda8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506110e092505050565b509250925092506000610fec8461129a565b90506001600160a01b0381166110335760405162461bcd60e51b815260040180806020018281038252602a815260200180611702602a913960400191505060405180910390fd5b6040805160018082528183019092529060208083019080368337019050509750838860008151811061106157fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050965082876000815181106110a557fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508086600081518110610f2c57fe5b6000806000808480602001905160808110156110fb57600080fd5b5080516020820151604083015160609093015191989097509195509350915050565b826001600160a01b031663e63697c88386846040518463ffffffff1660e01b815260040180848152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b158015610cc857600080fd5b60408051636eb1769f60e11b81523060048201526001600160a01b0384811660248301529151839286169163dd62ed3e916044808301926020929190829003018186803b1580156111cc57600080fd5b505afa1580156111e0573d6000803e3d6000fd5b505050506040513d60208110156111f657600080fd5b50511015610dd657610dd66001600160a01b03841683600019611322565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610dd6908490611431565b600080600083806020019051606081101561128057600080fd5b508051602082015160409092015190969195509350915050565b60006112a4610a56565b6001600160a01b03166366adb867836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156112f057600080fd5b505afa158015611304573d6000803e3d6000fd5b505050506040513d602081101561131a57600080fd5b505192915050565b8015806113a8575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561137a57600080fd5b505afa15801561138e573d6000803e3d6000fd5b505050506040513d60208110156113a457600080fd5b5051155b6113e35760405162461bcd60e51b81526004018080602001828103825260368152602001806117fd6036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610dd69084905b6060611486826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114e29092919063ffffffff16565b805190915015610dd6578080602001905160208110156114a557600080fd5b5051610dd65760405162461bcd60e51b815260040180806020018281038252602a8152602001806117d3602a913960400191505060405180910390fd5b60606114f184846000856114fb565b90505b9392505050565b60608247101561153c5760405162461bcd60e51b81526004018080602001828103825260268152602001806117536026913960400191505060405180910390fd5b61154585611657565b611596576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115d55780518252601f1990920191602091820191016115b6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611637576040519150601f19603f3d011682016040523d82523d6000602084013e61163c565b606091505b509150915061164c82828661165d565b979650505050505050565b3b151590565b6060831561166c5750816114f4565b82511561167c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116c65781810151838201526020016116ae565b50505050905090810190601f1680156116f35780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5f5f7061727365417373657473466f7252656465656d3a20556e737570706f7274656420795661756c747061727365417373657473466f724d6574686f643a205f73656c6563746f7220696e76616c6964416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e5f5f7061727365417373657473466f724c656e643a20556e737570706f7274656420795661756c745361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220619186c7708c613640cdb535216b66b7fd0c9ed32d056c208a08d9f7a35f349b64736f6c634300060c0033';
}

// prettier-ignore
export const YearnVaultV2Adapter = contract<YearnVaultV2Adapter, YearnVaultV2AdapterArgs>(YearnVaultV2AdapterBytecode)`
  constructor(address _integrationManager, address _yearnVaultV2PriceFeed)
  function ADD_TRACKED_ASSETS_SELECTOR() view returns (bytes4)
  function APPROVE_ASSETS_SELECTOR() view returns (bytes4)
  function CLAIM_REWARDS_AND_REINVEST_SELECTOR() view returns (bytes4)
  function CLAIM_REWARDS_AND_SWAP_SELECTOR() view returns (bytes4)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function getYearnVaultV2PriceFeed() view returns (address yearnVaultV2PriceFeed_)
  function identifier() pure returns (string identifier_)
  function lend(address _vaultProxy, bytes, bytes _encodedAssetTransferArgs)
  function parseAssetsForMethod(bytes4 _selector, bytes _encodedCallArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function redeem(address _vaultProxy, bytes _encodedCallArgs, bytes _encodedAssetTransferArgs)
`;
