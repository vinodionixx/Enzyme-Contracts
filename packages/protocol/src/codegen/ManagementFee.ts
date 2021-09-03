/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ManagementFeeArgs = [_feeManager: AddressLike];

// prettier-ignore
export interface ManagementFee extends Contract<ManagementFee> {
  activateForFund: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike) => void, ManagementFee>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _settingsData: BytesLike) => void, ManagementFee>
  getFeeInfoForFund: Call<(_comptrollerProxy: AddressLike) => { scaledPerSecondRate: BigNumber, lastSettled: BigNumber }, ManagementFee>
  getFeeManager: Call<() => string, ManagementFee>
  identifier: Call<() => string, ManagementFee>
  implementedHooks: Call<() => { implementedHooksForSettle_: BigNumber[], implementedHooksForUpdate_: BigNumber[], usesGavOnSettle_: boolean, usesGavOnUpdate_: boolean }, ManagementFee>
  payout: Send<(arg0: AddressLike, arg1: AddressLike) => boolean, ManagementFee>
  settle: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, arg2: BigNumberish, arg3: BytesLike, arg4: BigNumberish) => { settlementType_: BigNumber, '1': string, sharesDue_: BigNumber }, ManagementFee>
  update: Send<(arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike, arg4: BigNumberish) => void, ManagementFee>
}

let ManagementFeeBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ManagementFeeBytecode =
    '0x60a060405234801561001057600080fd5b5060405161100f38038061100f83398101604081905261002f91610055565b60601b6001600160601b0319166080526100a3565b805161004f8161008c565b92915050565b60006020828403121561006757600080fd5b60006100738484610044565b949350505050565b60006001600160a01b03821661004f565b6100958161007b565b81146100a057600080fd5b50565b60805160601c610f406100cf6000398061018b528061028b528061039a52806107555250610f406000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637998a1c4116100665780637998a1c4146100fe578063877fd47314610113578063b78b481314610133578063cbf54bb214610153578063f2d638261461016b57610093565b80630f5f6b4f14610098578063233faf5f146100ad5780633146d058146100c057806341892d7e146100d3575b600080fd5b6100ab6100a6366004610a4a565b610180565b005b6100ab6100bb3660046109ba565b610278565b6100ab6100ce366004610980565b610280565b6100e66100e13660046109ba565b61038b565b6040516100f593929190610d96565b60405180910390f35b61010661060c565b6040516100f59190610dbe565b61012661012136600461095a565b610630565b6040516100f59190610e1f565b610146610141366004610980565b61066d565b6040516100f59190610d88565b61015b610676565b6040516100f59493929190610d3e565b610173610753565b6040516100f59190610d30565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101d15760405162461bcd60e51b81526004016101c890610def565b60405180910390fd5b60006101df82840184610aa0565b9050600081116102015760405162461bcd60e51b81526004016101c890610e0f565b604080518082018252828152600060208083018281526001600160a01b038916808452918390529184902092518355905160019092019190915590517f90b7d1516011c1da1279f3ae0ed052b1416e7c373d4ec40cf515aa53c5f839df9061026a908490610e2d565b60405180910390a250505050565b505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c85760405162461bcd60e51b81526004016101c890610def565b6000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b9190610abe565b1115610387576001600160a01b03821660008181526020819052604080822042600190910155517f8f1e8a779dce142f8b8b45e1747798edee9623be81f2f411496f3b49eb67bc369190a25b5050565b60008080336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103d75760405162461bcd60e51b81526004016101c890610def565b6001600160a01b03891660009081526020819052604081206001810154909190610402904290610777565b90508061041b5760008060009450945094505050610600565b60008a90506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045b57600080fd5b505afa15801561046f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104939190610abe565b90508015610581576000610523836001600160a01b03166370a082318f6040518263ffffffff1660e01b81526004016104cc9190610d30565b60206040518083038186803b1580156104e457600080fd5b505afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c9190610abe565b8390610777565b9050801561057f5761057c6b033b2e3c9fd0803ce800000061057661056f6b033b2e3c9fd0803ce80000006105698a600001548a6b033b2e3c9fd0803ce800000061079f565b90610777565b849061085f565b90610899565b95505b505b6001600160a01b038d166000818152602081905260409081902042600190910155517f468aeeec0e901c52363552a06c1e39331d44c3cc886eb200af127ded3f380f82906105d29088908790610e3b565b60405180910390a2846105f357600080600096509650965050505050610600565b6002600096509650505050505b96509650969350505050565b60408051808201909152600a8152691350539051d15351539560b21b602082015290565b6106386108cb565b506001600160a01b0381166000908152602081815260409182902082518084019093528054835260010154908201525b919050565b60005b92915050565b6040805160038082526080820190925260609182916000918291906020820185803683370190505093506000846000815181106106af57fe5b602002602001019060058111156106c257fe5b908160058111156106cf57fe5b815250506001846001815181106106e257fe5b602002602001019060058111156106f557fe5b9081600581111561070257fe5b8152505060058460028151811061071557fe5b6020026020010190600581111561072857fe5b9081600581111561073557fe5b90525050604080516000808252602082019092529394909250829150565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000828211156107995760405162461bcd60e51b81526004016101c890610dcf565b50900390565b6000838015610840576001841680156107ba578592506107be565b8392505b50600283046002850494505b841561083a5785860286878204146107e157600080fd5b818101818110156107f157600080fd5b8581049750600287061561082d57878502858982041415891515161561081657600080fd5b8381018181101561082657600080fd5b8790049550505b50506002850494506107ca565b50610856565b8380156108505760009250610854565b8392505b505b505b9392505050565b60008261086e57506000610670565b8282028284828161087b57fe5b04146108585760405162461bcd60e51b81526004016101c890610dff565b60008082116108ba5760405162461bcd60e51b81526004016101c890610ddf565b8183816108c357fe5b049392505050565b604051806040016040528060008152602001600081525090565b803561067081610ee0565b60008083601f84011261090257600080fd5b50813567ffffffffffffffff81111561091a57600080fd5b60208301915083600182028301111561093257600080fd5b9250929050565b803561067081610ef4565b803561067081610f01565b805161067081610f01565b60006020828403121561096c57600080fd5b600061097884846108e5565b949350505050565b6000806040838503121561099357600080fd5b600061099f85856108e5565b92505060206109b0858286016108e5565b9150509250929050565b60008060008060008060a087890312156109d357600080fd5b60006109df89896108e5565b96505060206109f089828a016108e5565b9550506040610a0189828a01610939565b945050606087013567ffffffffffffffff811115610a1e57600080fd5b610a2a89828a016108f0565b93509350506080610a3d89828a01610944565b9150509295509295509295565b600080600060408486031215610a5f57600080fd5b6000610a6b86866108e5565b935050602084013567ffffffffffffffff811115610a8857600080fd5b610a94868287016108f0565b92509250509250925092565b600060208284031215610ab257600080fd5b60006109788484610944565b600060208284031215610ad057600080fd5b6000610978848461094f565b6000610ae88383610b61565b505060200190565b610af981610e69565b82525050565b6000610b0a82610e5c565b610b148185610e60565b9350610b1f83610e56565b8060005b83811015610b4d578151610b378882610adc565b9750610b4283610e56565b925050600101610b23565b509495945050505050565b610af981610e74565b610af981610e92565b6000610b7582610e5c565b610b7f8185610e60565b9350610b8f818560208601610e9d565b610b9881610ec9565b9093019392505050565b6000610baf601e83610e60565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b6000610be8601a83610e60565b7f536166654d6174683a206469766973696f6e206279207a65726f000000000000815260200192915050565b6000610c21602583610e60565b7f4f6e6c7920746865204665654d616e6765722063616e206d616b6520746869738152640818d85b1b60da1b602082015260400192915050565b6000610c68602183610e60565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b6000610cab603b83610e60565b7f61646446756e6453657474696e67733a207363616c65645065725365636f6e6481527f52617465206d7573742062652067726561746572207468616e20300000000000602082015260400192915050565b80516040830190610d0e8482610d27565b506020820151610d216020850182610d27565b50505050565b610af981610e8f565b602081016106708284610af0565b60808082528101610d4f8187610aff565b90508181036020830152610d638186610aff565b9050610d726040830185610b58565b610d7f6060830184610b58565b95945050505050565b602081016106708284610b58565b60608101610da48286610b61565b610db16020830185610af0565b6109786040830184610d27565b602080825281016108588184610b6a565b6020808252810161067081610ba2565b6020808252810161067081610bdb565b6020808252810161067081610c14565b6020808252810161067081610c5b565b6020808252810161067081610c9e565b604081016106708284610cfd565b602081016106708284610d27565b60408101610e498285610d27565b6108586020830184610d27565b60200190565b5190565b90815260200190565b600061067082610e83565b151590565b8061066881610ed3565b6001600160a01b031690565b90565b600061067082610e79565b60005b83811015610eb8578181015183820152602001610ea0565b83811115610d215750506000910152565b601f01601f191690565b60068110610edd57fe5b50565b610ee981610e69565b8114610edd57600080fd5b60068110610edd57600080fd5b610ee981610e8f56fea26469706673582212206362536dd2575bd6cd719df60230a6cf555efcee630f49554bbde2816266b7f464736f6c634300060c0033';
}

// prettier-ignore
export const ManagementFee = contract<ManagementFee, ManagementFeeArgs>(ManagementFeeBytecode)`
  constructor(address _feeManager)
  event ActivatedForMigratedFund(address indexed comptrollerProxy)
  event FundSettingsAdded(address indexed comptrollerProxy, uint256 scaledPerSecondRate)
  event Settled(address indexed comptrollerProxy, uint256 sharesQuantity, uint256 secondsSinceSettlement)
  function activateForFund(address _comptrollerProxy, address _vaultProxy)
  function addFundSettings(address _comptrollerProxy, bytes _settingsData)
  function getFeeInfoForFund(address _comptrollerProxy) view returns (tuple(uint256 scaledPerSecondRate, uint256 lastSettled) feeInfo_)
  function getFeeManager() view returns (address feeManager_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() view returns (uint8[] implementedHooksForSettle_, uint8[] implementedHooksForUpdate_, bool usesGavOnSettle_, bool usesGavOnUpdate_)
  function payout(address, address) returns (bool)
  function settle(address _comptrollerProxy, address _vaultProxy, uint8, bytes, uint256) returns (uint8 settlementType_, address, uint256 sharesDue_)
  function update(address, address, uint8, bytes, uint256)
`;