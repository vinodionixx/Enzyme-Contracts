/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type MinMaxInvestmentArgs = [_policyManager: AddressLike];

// prettier-ignore
export interface MinMaxInvestment extends Contract<MinMaxInvestment> {
  activateForFund: Send<(arg0: AddressLike, arg1: AddressLike) => void, MinMaxInvestment>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _encodedSettings: BytesLike) => void, MinMaxInvestment>
  getFundSettings: Call<(_comptrollerProxy: AddressLike) => { minInvestmentAmount: BigNumber, maxInvestmentAmount: BigNumber }, MinMaxInvestment>
  getPolicyManager: Call<() => string, MinMaxInvestment>
  identifier: Call<() => string, MinMaxInvestment>
  implementedHooks: Call<() => BigNumber[], MinMaxInvestment>
  passesRule: Call<(_comptrollerProxy: AddressLike, _investmentAmount: BigNumberish) => boolean, MinMaxInvestment>
  updateFundSettings: Send<(_comptrollerProxy: AddressLike, arg1: AddressLike, _encodedSettings: BytesLike) => void, MinMaxInvestment>
  validateRule: Send<(_comptrollerProxy: AddressLike, arg1: AddressLike, arg2: BigNumberish, _encodedArgs: BytesLike) => boolean, MinMaxInvestment>
}

let MinMaxInvestmentBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MinMaxInvestmentBytecode =
    '0x60a060405234801561001057600080fd5b50604051610be8380380610be883398101604081905261002f91610055565b60601b6001600160601b0319166080526100a3565b805161004f8161008c565b92915050565b60006020828403121561006757600080fd5b60006100738484610044565b949350505050565b60006001600160a01b03821661004f565b6100958161007b565b81146100a057600080fd5b50565b60805160601c610b1e6100ca60003980610179528061033452806104105250610b1e6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636e3a9982116100665780636e3a9982146101095780637998a1c41461011c5780638945f19014610131578063cbf54bb214610144578063d44ad6cb1461015957610093565b80630f5f6b4f146100985780633146d058146100ad5780634fa4e54b146100c05780635b8f1c5a146100e9575b600080fd5b6100ab6100a6366004610742565b61016e565b005b6100ab6100bb366004610622565b610204565b6100d36100ce36600461059b565b610208565b6040516100e09190610a0b565b60405180910390f35b6100fc6100f73660046106c4565b610245565b6040516100e091906109cc565b6100fc610117366004610798565b6102a1565b6101246102fd565b6040516100e091906109da565b6100ab61013f36600461065c565b610329565b61014c6103b7565b6040516100e091906109b4565b61016161040e565b6040516100e091906109a6565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101bf5760405162461bcd60e51b81526004016101b6906109eb565b60405180910390fd5b6101ff8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061043292505050565b505050565b5050565b610210610501565b506001600160a01b0381166000908152602081815260409182902082518084019093528054835260010154908201525b919050565b60008061028784848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104d892505050565b505091505061029687826102a1565b979650505050505050565b6001600160a01b03821660009081526020819052604081208054600190910154816102d25783111591506102f79050565b806102e2575082101590506102f7565b8184101580156102f25750808411155b925050505b92915050565b60408051808201909152601281527113525397d3505617d253959154d51351539560721b602082015290565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103715760405162461bcd60e51b81526004016101b6906109eb565b6103b18483838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061043292505050565b50505050565b604080516001808252818301909252606091602080830190803683370190505090506001816000815181106103e857fe5b602002602001019060058111156103fb57fe5b9081600581111561040857fe5b90525090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000808280602001905181019061044991906107c8565b91509150806000148061045b57508082105b6104775760405162461bcd60e51b81526004016101b6906109fb565b6001600160a01b03841660008181526020819052604090819020848155600101839055517fed112d6c0e84b6900209ce5a4c04541bc63a517e0160888c447ee70be47ce60f906104ca9085908590610a19565b60405180910390a250505050565b600080600080848060200190518101906104f291906105c1565b93509350935093509193509193565b604051806040016040528060008152602001600081525090565b80356102f781610abe565b80516102f781610abe565b60008083601f84011261054357600080fd5b50813567ffffffffffffffff81111561055b57600080fd5b60208301915083600182028301111561057357600080fd5b9250929050565b80356102f781610ad2565b80356102f781610adf565b80516102f781610adf565b6000602082840312156105ad57600080fd5b60006105b9848461051b565b949350505050565b600080600080608085870312156105d757600080fd5b60006105e38787610526565b94505060206105f487828801610590565b935050604061060587828801610590565b925050606061061687828801610590565b91505092959194509250565b6000806040838503121561063557600080fd5b6000610641858561051b565b92505060206106528582860161051b565b9150509250929050565b6000806000806060858703121561067257600080fd5b600061067e878761051b565b945050602061068f8782880161051b565b935050604085013567ffffffffffffffff8111156106ac57600080fd5b6106b887828801610531565b95989497509550505050565b6000806000806000608086880312156106dc57600080fd5b60006106e8888861051b565b95505060206106f98882890161051b565b945050604061070a8882890161057a565b935050606086013567ffffffffffffffff81111561072757600080fd5b61073388828901610531565b92509250509295509295909350565b60008060006040848603121561075757600080fd5b6000610763868661051b565b935050602084013567ffffffffffffffff81111561078057600080fd5b61078c86828701610531565b92509250509250925092565b600080604083850312156107ab57600080fd5b60006107b7858561051b565b925050602061065285828601610585565b600080604083850312156107db57600080fd5b60006107e78585610590565b925050602061065285828601610590565b6000610804838361087d565b505060200190565b61081581610a47565b82525050565b600061082682610a3a565b6108308185610a3e565b935061083b83610a34565b8060005b8381101561086957815161085388826107f8565b975061085e83610a34565b92505060010161083f565b509495945050505050565b61081581610a52565b61081581610a70565b600061089182610a3a565b61089b8185610a3e565b93506108ab818560208601610a7b565b6108b481610aa7565b9093019392505050565b60006108cb602983610a3e565b7f4f6e6c792074686520506f6c6963794d616e616765722063616e206d616b65208152681d1a1a5cc818d85b1b60ba1b602082015260400192915050565b6000610916604c83610a3e565b7f5f5f73657446756e6453657474696e67733a206d696e496e766573746d656e7481527f416d6f756e74206d757374206265206c657373207468616e206d6178496e766560208201526b1cdd1b595b9d105b5bdd5b9d60a21b604082015260600192915050565b8051604083019061098e848261099d565b5060208201516103b160208501825b61081581610a6d565b602081016102f7828461080c565b602080825281016109c5818461081b565b9392505050565b602081016102f78284610874565b602080825281016109c58184610886565b602080825281016102f7816108be565b602080825281016102f781610909565b604081016102f7828461097d565b60408101610a27828561099d565b6109c5602083018461099d565b60200190565b5190565b90815260200190565b60006102f782610a61565b151590565b8061024081610ab1565b6001600160a01b031690565b90565b60006102f782610a57565b60005b83811015610a96578181015183820152602001610a7e565b838111156103b15750506000910152565b601f01601f191690565b60068110610abb57fe5b50565b610ac781610a47565b8114610abb57600080fd5b60068110610abb57600080fd5b610ac781610a6d56fea2646970667358221220b0aaf7655adc030dd7adb5775659114cee7b4cc98a2a23dc88bb98de4b29095464736f6c634300060c0033';
}

// prettier-ignore
export const MinMaxInvestment = contract<MinMaxInvestment, MinMaxInvestmentArgs>(MinMaxInvestmentBytecode)`
  constructor(address _policyManager)
  event FundSettingsSet(address indexed comptrollerProxy, uint256 minInvestmentAmount, uint256 maxInvestmentAmount)
  function activateForFund(address, address)
  function addFundSettings(address _comptrollerProxy, bytes _encodedSettings)
  function getFundSettings(address _comptrollerProxy) view returns (tuple(uint256 minInvestmentAmount, uint256 maxInvestmentAmount) fundSettings_)
  function getPolicyManager() view returns (address policyManager_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() view returns (uint8[] implementedHooks_)
  function passesRule(address _comptrollerProxy, uint256 _investmentAmount) view returns (bool isValid_)
  function updateFundSettings(address _comptrollerProxy, address, bytes _encodedSettings)
  function validateRule(address _comptrollerProxy, address, uint8, bytes _encodedArgs) returns (bool isValid_)
`;
