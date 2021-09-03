/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CompoundAdapterArgs = [
  _integrationManager: AddressLike,
  _compoundPriceFeed: AddressLike,
  _wethToken: AddressLike,
];

// prettier-ignore
export interface CompoundAdapter extends Contract<CompoundAdapter> {
  ADD_TRACKED_ASSETS_SELECTOR: Call<() => string, CompoundAdapter>
  APPROVE_ASSETS_SELECTOR: Call<() => string, CompoundAdapter>
  CLAIM_REWARDS_AND_REINVEST_SELECTOR: Call<() => string, CompoundAdapter>
  CLAIM_REWARDS_AND_SWAP_SELECTOR: Call<() => string, CompoundAdapter>
  CLAIM_REWARDS_SELECTOR: Call<() => string, CompoundAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, CompoundAdapter>
  LEND_SELECTOR: Call<() => string, CompoundAdapter>
  REDEEM_SELECTOR: Call<() => string, CompoundAdapter>
  STAKE_SELECTOR: Call<() => string, CompoundAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, CompoundAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, CompoundAdapter>
  UNSTAKE_SELECTOR: Call<() => string, CompoundAdapter>
  getCompoundPriceFeed: Call<() => string, CompoundAdapter>
  getIntegrationManager: Call<() => string, CompoundAdapter>
  getWethToken: Call<() => string, CompoundAdapter>
  identifier: Call<() => string, CompoundAdapter>
  lend: Send<(_vaultProxy: AddressLike, arg1: BytesLike, _encodedAssetTransferArgs: BytesLike) => void, CompoundAdapter>
  parseAssetsForMethod: Call<(_selector: BytesLike, _encodedCallArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, CompoundAdapter>
  redeem: Send<(_vaultProxy: AddressLike, arg1: BytesLike, _encodedAssetTransferArgs: BytesLike) => void, CompoundAdapter>
}

let CompoundAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CompoundAdapterBytecode =
    '0x60e060405234801561001057600080fd5b50604051611df3380380611df38339818101604052606081101561003357600080fd5b50805160208201516040909201516001600160601b0319606092831b811660805292821b831660a052901b1660c05260805160601c60a05160601c60c05160601c611d346100bf6000398061083352806108815280610b4e528061126b52806112b0525080610ae25280610c025280610e4d5250806106ca528061109352806113835250611d346000f3fe6080604052600436106101185760003560e01c806376cc7ac6116100a0578063e27a06b511610064578063e27a06b514610632578063e4d9047814610647578063e7c456901461065c578063f075399414610671578063f7d882b5146106865761011f565b806376cc7ac6146102e25780637998a1c4146104a3578063863e5ad01461052d578063b23228cf14610542578063c29fa9dd146105575761011f565b806332bf8227116100e757806332bf82271461025d5780633ffc15911461028e57806340da225d146102a35780634c252f91146102b85780635ca62b3c146102cd5761011f565b8063080456c114610124578063099f751514610156578063131461c014610233578063257cb1a3146102485761011f565b3661011f57005b600080fd5b34801561013057600080fd5b5061013961069b565b604080516001600160e01b03199092168252519081900360200190f35b34801561016257600080fd5b506102316004803603606081101561017957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156101a357600080fd5b8201836020820111156101b557600080fd5b803590602001918460018302840111600160201b831117156101d657600080fd5b919390929091602081019035600160201b8111156101f357600080fd5b82018360208201111561020557600080fd5b803590602001918460018302840111600160201b8311171561022657600080fd5b5090925090506106bf565b005b34801561023f57600080fd5b50610139610a98565b34801561025457600080fd5b50610139610abc565b34801561026957600080fd5b50610272610ae0565b604080516001600160a01b039092168252519081900360200190f35b34801561029a57600080fd5b50610139610b04565b3480156102af57600080fd5b50610139610b28565b3480156102c457600080fd5b50610272610b4c565b3480156102d957600080fd5b50610139610b70565b3480156102ee57600080fd5b5061036e6004803603604081101561030557600080fd5b6001600160e01b03198235169190810190604081016020820135600160201b81111561033057600080fd5b82018360208201111561034257600080fd5b803590602001918460018302840111600160201b8311171561036357600080fd5b509092509050610b94565b6040518086600381111561037e57fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156103cb5781810151838201526020016103b3565b50505050905001858103845288818151815260200191508051906020019060200280838360005b8381101561040a5781810151838201526020016103f2565b50505050905001858103835287818151815260200191508051906020019060200280838360005b83811015610449578181015183820152602001610431565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015610488578181015183820152602001610470565b50505050905001995050505050505050505060405180910390f35b3480156104af57600080fd5b506104b861101e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156104f25781810151838201526020016104da565b50505050905090810190601f16801561051f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053957600080fd5b50610139611040565b34801561054e57600080fd5b50610139611064565b34801561056357600080fd5b506102316004803603606081101561057a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156105a457600080fd5b8201836020820111156105b657600080fd5b803590602001918460018302840111600160201b831117156105d757600080fd5b919390929091602081019035600160201b8111156105f457600080fd5b82018360208201111561060657600080fd5b803590602001918460018302840111600160201b8311171561062757600080fd5b509092509050611088565b34801561063e57600080fd5b50610139611339565b34801561065357600080fd5b5061013961135d565b34801561066857600080fd5b50610272611381565b34801561067d57600080fd5b506101396113a5565b34801561069257600080fd5b506101396113c9565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107265760405162461bcd60e51b8152600401808060200182810382526032815260200180611c456032913960400191505060405180910390fd5b8482828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509250606091508190508061076c856113ed565b92965090945092509050600184600381111561078457fe5b14156107e65760005b83518110156107e4576107dc87308584815181106107a757fe5b60200260200101518785815181106107bb57fe5b60200260200101516001600160a01b03166115b5909392919063ffffffff16565b60010161078d565b505b606080606061082a8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113ed92505050565b935093509350507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360008151811061086857fe5b60200260200101516001600160a01b03161415610992577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836000815181106108bb57fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156108f957600080fd5b505af115801561090d573d6000803e3d6000fd5b505050508060008151811061091e57fe5b60200260200101516001600160a01b0316631249c58b8360008151811061094157fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b15801561097457600080fd5b505af1158015610988573d6000803e3d6000fd5b5050505050610a74565b6109d9836000815181106109a257fe5b6020026020010151826000815181106109b757fe5b6020026020010151846000815181106109cc57fe5b6020026020010151611615565b806000815181106109e657fe5b60200260200101516001600160a01b031663a0712d6883600081518110610a0957fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610a4757600080fd5b505af1158015610a5b573d6000803e3d6000fd5b505050506040513d6020811015610a7157600080fd5b50505b505050610a8186826116b2565b610a8b86846116b2565b5050505050505050505050565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7f000000000000000000000000000000000000000000000000000000000000000090565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fdfd5ee0f6067928bf85a7c4430811282840bc99332dda3dab462c02bf95b67cc81565b600060608080806001600160e01b0319881663099f751560e01b1415610de6576000806000610bf88a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061178e92505050565b92509250925060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634cae3ad7856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610c6d57600080fd5b505afa158015610c81573d6000803e3d6000fd5b505050506040513d6020811015610c9757600080fd5b505190506001600160a01b038116610ce05760405162461bcd60e51b8152600401808060200182810382526028815260200180611c776028913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505097508088600081518110610d0e57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505096508287600081518110610d5257fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508386600081518110610d8d57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505094508185600081518110610dd157fe5b6020026020010181815250505050505061100f565b6001600160e01b0319881663c29fa9dd60e01b1415610fd8576000806000610e438a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061178e92505050565b92509250925060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634cae3ad7856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610eb857600080fd5b505afa158015610ecc573d6000803e3d6000fd5b505050506040513d6020811015610ee257600080fd5b505190506001600160a01b038116610f2b5760405162461bcd60e51b8152600401808060200182810382526028815260200180611c776028913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505097508388600081518110610f5957fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505096508287600081518110610f9d57fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508086600081518110610d8d57fe5b60405162461bcd60e51b8152600401808060200182810382526027815260200180611bf86027913960400191505060405180910390fd5b60029450939792965093509350565b60408051808201909152600881526710d3d35413d5539160c21b602082015290565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110ef5760405162461bcd60e51b8152600401808060200182810382526032815260200180611c456032913960400191505060405180910390fd5b8482828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525092506060915081905080611135856113ed565b92965090945092509050600184600381111561114d57fe5b141561117a5760005b83518110156111785761117087308584815181106107a757fe5b600101611156565b505b60608060606111be8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113ed92505050565b93509350935050826000815181106111d257fe5b60200260200101516001600160a01b031663db006a75836000815181106111f557fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561123357600080fd5b505af1158015611247573d6000803e3d6000fd5b505050506040513d602081101561125d57600080fd5b505080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690829060009061129757fe5b60200260200101516001600160a01b03161415610a74577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0306001600160a01b0316316040518263ffffffff1660e01b81526004016000604051808303818588803b15801561131357600080fd5b505af1158015611327573d6000803e3d6000fd5b5050505050505050610a8186826116b2565b7f848f3a590fb2f9795d1a275009c54c26c53833277c96b90e0ddd01753a1d590681565b7f3377e18acf9e83665eacd6af109261424fca32a298e2fc2e6095ba563fb8390e81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f1d51f49b5273d9ddbb643dc349fab8d36dbb470209c2ea71033bea49dd311c2781565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b6000606080606084806020019051608081101561140957600080fd5b815160208301805160405192949293830192919084600160201b82111561142f57600080fd5b90830190602082018581111561144457600080fd5b82518660208202830111600160201b8211171561146057600080fd5b82525081516020918201928201910280838360005b8381101561148d578181015183820152602001611475565b5050505090500160405260200180516040519392919084600160201b8211156114b557600080fd5b9083019060208201858111156114ca57600080fd5b82518660208202830111600160201b821117156114e657600080fd5b82525081516020918201928201910280838360005b838110156115135781810151838201526020016114fb565b5050505090500160405260200180516040519392919084600160201b82111561153b57600080fd5b90830190602082018581111561155057600080fd5b82518660208202830111600160201b8211171561156c57600080fd5b82525081516020918201928201910280838360005b83811015611599578181015183820152602001611581565b5050505090500160405250505093509350935093509193509193565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261160f9085906117c2565b50505050565b60408051636eb1769f60e11b81523060048201526001600160a01b0384811660248301529151839286169163dd62ed3e916044808301926020929190829003018186803b15801561166557600080fd5b505afa158015611679573d6000803e3d6000fd5b505050506040513d602081101561168f57600080fd5b505110156116ad576116ad6001600160a01b03841683600019611873565b505050565b60005b81518110156116ad5760008282815181106116cc57fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561172057600080fd5b505afa158015611734573d6000803e3d6000fd5b505050506040513d602081101561174a57600080fd5b50519050801561178557611785848285858151811061176557fe5b60200260200101516001600160a01b03166119869092919063ffffffff16565b506001016116b5565b60008060008380602001905160608110156117a857600080fd5b508051602082015160409092015190969195509350915050565b6060611817826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119d89092919063ffffffff16565b8051909150156116ad5780806020019051602081101561183657600080fd5b50516116ad5760405162461bcd60e51b815260040180806020018281038252602a815260200180611c9f602a913960400191505060405180910390fd5b8015806118f9575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156118cb57600080fd5b505afa1580156118df573d6000803e3d6000fd5b505050506040513d60208110156118f557600080fd5b5051155b6119345760405162461bcd60e51b8152600401808060200182810382526036815260200180611cc96036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526116ad9084906117c2565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526116ad9084906117c2565b60606119e784846000856119f1565b90505b9392505050565b606082471015611a325760405162461bcd60e51b8152600401808060200182810382526026815260200180611c1f6026913960400191505060405180910390fd5b611a3b85611b4d565b611a8c576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611acb5780518252601f199092019160209182019101611aac565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611b2d576040519150601f19603f3d011682016040523d82523d6000602084013e611b32565b606091505b5091509150611b42828286611b53565b979650505050505050565b3b151590565b60608315611b625750816119ea565b825115611b725782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bbc578181015183820152602001611ba4565b50505050905090810190601f168015611be95780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe7061727365417373657473466f724d6574686f643a205f73656c6563746f7220696e76616c6964416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e7061727365417373657473466f724d6574686f643a20556e737570706f727465642063546f6b656e5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a264697066735822122023cdff63094f772095dbd20745bc94ea6c5931b4fed6bd0c2e5fe840bddaa44b64736f6c634300060c0033';
}

// prettier-ignore
export const CompoundAdapter = contract<CompoundAdapter, CompoundAdapterArgs>(CompoundAdapterBytecode)`
  constructor(address _integrationManager, address _compoundPriceFeed, address _wethToken)
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
  function getCompoundPriceFeed() view returns (address compoundPriceFeed_)
  function getIntegrationManager() view returns (address integrationManager_)
  function getWethToken() view returns (address wethToken_)
  function identifier() pure returns (string identifier_)
  function lend(address _vaultProxy, bytes, bytes _encodedAssetTransferArgs)
  function parseAssetsForMethod(bytes4 _selector, bytes _encodedCallArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function redeem(address _vaultProxy, bytes, bytes _encodedAssetTransferArgs)
`;
