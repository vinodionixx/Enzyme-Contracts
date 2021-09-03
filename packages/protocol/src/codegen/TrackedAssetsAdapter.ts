/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type TrackedAssetsAdapterArgs = [_integrationManager: AddressLike];

// prettier-ignore
export interface TrackedAssetsAdapter extends Contract<TrackedAssetsAdapter> {
  ADD_TRACKED_ASSETS_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  APPROVE_ASSETS_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  CLAIM_REWARDS_AND_REINVEST_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  CLAIM_REWARDS_AND_SWAP_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  CLAIM_REWARDS_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  LEND_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  REDEEM_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  STAKE_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  UNSTAKE_SELECTOR: Call<() => string, TrackedAssetsAdapter>
  addTrackedAssets: Call<(arg0: AddressLike, arg1: BytesLike, arg2: BytesLike) => void, TrackedAssetsAdapter>
  getIntegrationManager: Call<() => string, TrackedAssetsAdapter>
  identifier: Call<() => string, TrackedAssetsAdapter>
  parseAssetsForMethod: Call<(_selector: BytesLike, _encodedCallArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, TrackedAssetsAdapter>
}

let TrackedAssetsAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  TrackedAssetsAdapterBytecode =
    '0x60a060405234801561001057600080fd5b5060405161092b38038061092b8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166108c46100676000398061075552506108c46000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063848f3a5911610097578063e4d9047811610066578063e4d904781461046b578063e7c4569014610473578063f075399414610497578063f7d882b51461049f57610100565b8063848f3a5914610383578063863e5ad014610453578063b23228cf1461045b578063e27a06b51461046357610100565b806340da225d116100d357806340da225d146101425780635ca62b3c1461014a57806376cc7ac6146101525780637998a1c41461030657610100565b8063080456c114610105578063131461c01461012a578063257cb1a3146101325780633ffc15911461013a575b600080fd5b61010d6104a7565b604080516001600160e01b03199092168252519081900360200190f35b61010d6104cb565b61010d6104ef565b61010d610513565b61010d610537565b61010d61055b565b6101d16004803603604081101561016857600080fd5b6001600160e01b03198235169190810190604081016020820135600160201b81111561019357600080fd5b8201836020820111156101a557600080fd5b803590602001918460018302840111600160201b831117156101c657600080fd5b50909250905061057f565b604051808660038111156101e157fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b8381101561022e578181015183820152602001610216565b50505050905001858103845288818151815260200191508051906020019060200280838360005b8381101561026d578181015183820152602001610255565b50505050905001858103835287818151815260200191508051906020019060200280838360005b838110156102ac578181015183820152602001610294565b50505050905001858103825286818151815260200191508051906020019060200280838360005b838110156102eb5781810151838201526020016102d3565b50505050905001995050505050505050505060405180910390f35b61030e610694565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610348578181015183820152602001610330565b50505050905090810190601f1680156103755780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104516004803603606081101561039957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103c357600080fd5b8201836020820111156103d557600080fd5b803590602001918460018302840111600160201b831117156103f657600080fd5b919390929091602081019035600160201b81111561041357600080fd5b82018360208201111561042557600080fd5b803590602001918460018302840111600160201b8311171561044657600080fd5b5090925090506106bc565b005b61010d6106c3565b61010d6106e7565b61010d61070b565b61010d61072f565b61047b610753565b604080516001600160a01b039092168252519081900360200190f35b61010d610777565b61010d61079b565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7fdfd5ee0f6067928bf85a7c4430811282840bc99332dda3dab462c02bf95b67cc81565b600060608080806001600160e01b0319881663848f3a5960e01b146105d55760405162461bcd60e51b81526004018080602001828103825260278152602001806108686027913960400191505060405180910390fd5b61061487878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506107bf92505050565b9150815167ffffffffffffffff8111801561062e57600080fd5b50604051908082528060200260200182016040528015610658578160200160208202803683370190505b50905060005b815181101561068857600182828151811061067557fe5b602090810291909101015260010161065e565b50939792965093509350565b60408051808201909152600e81526d545241434b45445f41535345545360901b602082015290565b5050505050565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b7f848f3a590fb2f9795d1a275009c54c26c53833277c96b90e0ddd01753a1d590681565b7f3377e18acf9e83665eacd6af109261424fca32a298e2fc2e6095ba563fb8390e81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f1d51f49b5273d9ddbb643dc349fab8d36dbb470209c2ea71033bea49dd311c2781565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b60608180602001905160208110156107d657600080fd5b8101908080516040519392919084600160201b8211156107f557600080fd5b90830190602082018581111561080a57600080fd5b82518660208202830111600160201b8211171561082657600080fd5b82525081516020918201928201910280838360005b8381101561085357818101518382015260200161083b565b50505050905001604052505050905091905056fe7061727365417373657473466f724d6574686f643a205f73656c6563746f7220696e76616c6964a26469706673582212205f50266bfb4acfa5b38936762517ed123e26e82ea4fe28ee3a1ebfcdb8f2ec8264736f6c634300060c0033';
}

// prettier-ignore
export const TrackedAssetsAdapter = contract<TrackedAssetsAdapter, TrackedAssetsAdapterArgs>(TrackedAssetsAdapterBytecode)`
  constructor(address _integrationManager)
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
  function addTrackedAssets(address, bytes, bytes) view
  function getIntegrationManager() view returns (address integrationManager_)
  function identifier() pure returns (string identifier_)
  function parseAssetsForMethod(bytes4 _selector, bytes _encodedCallArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
`;
