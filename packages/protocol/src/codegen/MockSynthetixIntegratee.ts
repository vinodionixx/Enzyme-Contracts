/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type MockSynthetixIntegrateeArgs = [
  _name: string,
  _symbol: string,
  _decimals: BigNumberish,
  _centralizedRateProvider: AddressLike,
  _exchangeRates: AddressLike,
  _fee: BigNumberish,
];

// prettier-ignore
export interface MockSynthetixIntegratee extends Contract<MockSynthetixIntegratee> {
  addMinters: Send<(_minters: AddressLike[]) => void, MockSynthetixIntegratee>
  allowance: Call<(owner: AddressLike, spender: AddressLike) => BigNumber, MockSynthetixIntegratee>
  approve: Send<(spender: AddressLike, amount: BigNumberish) => boolean, MockSynthetixIntegratee>
  approveExchangeOnBehalf: Send<(_delegate: AddressLike) => void, MockSynthetixIntegratee>
  balanceOf: Call<(account: AddressLike) => BigNumber, MockSynthetixIntegratee>
  burn: Send<(amount: BigNumberish) => void, MockSynthetixIntegratee>
  burnFrom: Send<(account: AddressLike, amount: BigNumberish) => void, MockSynthetixIntegratee>
  canExchangeFor: Call<(_authorizer: AddressLike, _delegate: AddressLike) => boolean, MockSynthetixIntegratee>
  decimals: Call<() => BigNumber, MockSynthetixIntegratee>
  decreaseAllowance: Send<(spender: AddressLike, subtractedValue: BigNumberish) => boolean, MockSynthetixIntegratee>
  exchangeOnBehalfWithTracking: Send<(_exchangeForAddress: AddressLike, _srcCurrencyKey: BytesLike, _srcAmount: BigNumberish, _destinationCurrencyKey: BytesLike, arg4: AddressLike, arg5: BytesLike) => BigNumber, MockSynthetixIntegratee>
  getAmountsForExchange: Send<(_srcAmount: BigNumberish, _srcCurrencyKey: BytesLike, _destCurrencyKey: BytesLike) => { amountReceived_: BigNumber, fee_: BigNumber, exchangeFeeRate_: BigNumber }, MockSynthetixIntegratee>
  getExchangeRates: Call<() => string, MockSynthetixIntegratee>
  getFee: Call<() => BigNumber, MockSynthetixIntegratee>
  getSynthFromCurrencyKey: Call<(_currencyKey: BytesLike) => string, MockSynthetixIntegratee>
  getUnitFee: Call<() => BigNumber, MockSynthetixIntegratee>
  increaseAllowance: Send<(spender: AddressLike, addedValue: BigNumberish) => boolean, MockSynthetixIntegratee>
  mint: Send<(_amount: BigNumberish) => void, MockSynthetixIntegratee>
  mintFor: Send<(_who: AddressLike, _amount: BigNumberish) => void, MockSynthetixIntegratee>
  name: Call<() => string, MockSynthetixIntegratee>
  owner: Call<() => string, MockSynthetixIntegratee>
  renounceOwnership: Send<() => void, MockSynthetixIntegratee>
  requireAndGetAddress: Call<(_name: BytesLike, arg1: string) => string, MockSynthetixIntegratee>
  setSynthFromCurrencyKeys: Send<(_currencyKeys: BytesLike[], _synths: AddressLike[]) => void, MockSynthetixIntegratee>
  settle: Send<(arg0: AddressLike, arg1: BytesLike) => { '0': BigNumber, '1': BigNumber, '2': BigNumber }, MockSynthetixIntegratee>
  symbol: Call<() => string, MockSynthetixIntegratee>
  totalSupply: Call<() => BigNumber, MockSynthetixIntegratee>
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, MockSynthetixIntegratee>
  transferFrom: Send<(sender: AddressLike, recipient: AddressLike, amount: BigNumberish) => boolean, MockSynthetixIntegratee>
  transferOwnership: Send<(newOwner: AddressLike) => void, MockSynthetixIntegratee>
}

let MockSynthetixIntegrateeBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockSynthetixIntegrateeBytecode =
    '0x60e06040523480156200001157600080fd5b506040516200261538038062002615833981810160405260c08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208281015191830151606084015160809094015188519396509094509187918791879184918491620001d791600391850190620004b4565b508051620001ed906004906020840190620004b4565b50506005805460ff1916601217905550600062000209620002c4565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506200026a81620002c8565b6200029933620002938360ff16600a0a6305f5e100620002de60201b620014081790919060201c565b62000345565b5050506001600160601b0319606093841b81166080529190921b1660a05260c0525062000550915050565b3390565b6005805460ff191660ff92909216919091179055565b600082620002ef575060006200033f565b82820282848281620002fd57fe5b04146200033c5760405162461bcd60e51b8152600401808060200182810382526021815260200180620025f46021913960400191505060405180910390fd5b90505b92915050565b6001600160a01b038216620003a1576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620003af6000838362000454565b620003cb816002546200045960201b620014611790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620003fe9183906200146162000459821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200033c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004f757805160ff191683800117855562000527565b8280016001018555821562000527579182015b82811115620005275782518255916020019190600101906200050a565b506200053592915062000539565b5090565b5b808211156200053557600081556001016200053a565b60805160601c60a05160601c60c0516120676200058d60003980611020528061137d525080610ff652806110d152508061130852506120676000f3fe6080604052600436106101d15760003560e01c806391e56b68116100f7578063c3f797ef11610095578063dd62ed3e11610064578063dd62ed3e1461088b578063f2fde38b146108c6578063f450aa34146108f9578063faf431bb1461092f576101d8565b8063c3f797ef146107a6578063ced72f87146107bb578063da1919b3146107d0578063dacb2d0114610809576101d8565b8063a457c2d7116100d1578063a457c2d714610654578063a9059cbb1461068d578063c0dc8e0d146106c6578063c15e3f2d14610791576101d8565b806391e56b68146105c257806395d89b4114610615578063a0712d681461062a576101d8565b8063395093511161016f578063715018a61161013e578063715018a6146104b157806371e2a657146104c657806379cc6790146105745780638da5cb5b146105ad576101d8565b806339509351146103e657806342966c681461041f578063447fbc631461044b57806370a082311461047e576101d8565b806318160ddd116101ab57806318160ddd146102fa5780631b16802c1461032157806323b872dd14610378578063313ce567146103bb576101d8565b806306fdde03146101dd578063095ea7b31461026757806311cac00a146102b4576101d8565b366101d857005b600080fd5b3480156101e957600080fd5b506101f261096a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027357600080fd5b506102a06004803603604081101561028a57600080fd5b506001600160a01b038135169060200135610a00565b604080519115158252519081900360200190f35b3480156102c057600080fd5b506102de600480360360208110156102d757600080fd5b5035610a1e565b604080516001600160a01b039092168252519081900360200190f35b34801561030657600080fd5b5061030f610a39565b60408051918252519081900360200190f35b34801561032d57600080fd5b5061035a6004803603604081101561034457600080fd5b506001600160a01b038135169060200135610a3f565b60408051938452602084019290925282820152519081900360600190f35b34801561038457600080fd5b506102a06004803603606081101561039b57600080fd5b506001600160a01b03813581169160208101359091169060400135610a4b565b3480156103c757600080fd5b506103d0610ad3565b6040805160ff9092168252519081900360200190f35b3480156103f257600080fd5b506102a06004803603604081101561040957600080fd5b506001600160a01b038135169060200135610adc565b34801561042b57600080fd5b506104496004803603602081101561044257600080fd5b5035610b2a565b005b34801561045757600080fd5b506104496004803603602081101561046e57600080fd5b50356001600160a01b0316610b3e565b34801561048a57600080fd5b5061030f600480360360208110156104a157600080fd5b50356001600160a01b0316610b6f565b3480156104bd57600080fd5b50610449610b8a565b3480156104d257600080fd5b50610449600480360360208110156104e957600080fd5b810190602081018135600160201b81111561050357600080fd5b82018360208201111561051557600080fd5b803590602001918460208302840111600160201b8311171561053657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c4e945050505050565b34801561058057600080fd5b506104496004803603604081101561059757600080fd5b506001600160a01b038135169060200135610d1e565b3480156105b957600080fd5b506102de610d78565b3480156105ce57600080fd5b5061030f600480360360c08110156105e557600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135610d8c565b34801561062157600080fd5b506101f2610dea565b34801561063657600080fd5b506104496004803603602081101561064d57600080fd5b5035610e4b565b34801561066057600080fd5b506102a06004803603604081101561067757600080fd5b506001600160a01b038135169060200135610ebd565b34801561069957600080fd5b506102a0600480360360408110156106b057600080fd5b506001600160a01b038135169060200135610f25565b3480156106d257600080fd5b50610449600480360360408110156106e957600080fd5b810190602081018135600160201b81111561070357600080fd5b82018360208201111561071557600080fd5b803590602001918460208302840111600160201b8311171561073657600080fd5b919390929091602081019035600160201b81111561075357600080fd5b82018360208201111561076557600080fd5b803590602001918460208302840111600160201b8311171561078657600080fd5b509092509050610f39565b34801561079d57600080fd5b506102de610ff4565b3480156107b257600080fd5b5061030f611018565b3480156107c757600080fd5b5061030f61101e565b3480156107dc57600080fd5b50610449600480360360408110156107f357600080fd5b506001600160a01b038135169060200135611042565b34801561081557600080fd5b506102de6004803603604081101561082c57600080fd5b81359190810190604081016020820135600160201b81111561084d57600080fd5b82018360208201111561085f57600080fd5b803590602001918460018302840111600160201b8311171561088057600080fd5b5090925090506110b4565b34801561089757600080fd5b5061030f600480360360408110156108ae57600080fd5b506001600160a01b03813581169160200135166110fe565b3480156108d257600080fd5b50610449600480360360208110156108e957600080fd5b50356001600160a01b0316611129565b34801561090557600080fd5b5061035a6004803603606081101561091c57600080fd5b5080359060208101359060400135611249565b34801561093b57600080fd5b506102a06004803603604081101561095257600080fd5b506001600160a01b03813581169160200135166113da565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050905090565b6000610a14610a0d6114bb565b84846114bf565b5060015b92915050565b6000908152600860205260409020546001600160a01b031690565b60025490565b60008060009250925092565b6000610a588484846115ab565b610ac884610a646114bb565b610ac385604051806060016040528060288152602001611e4d602891396001600160a01b038a16600090815260016020526040812090610aa26114bb565b6001600160a01b031681526020810191909152604001600020549190611706565b6114bf565b5060015b9392505050565b60055460ff1690565b6000610a14610ae96114bb565b84610ac38560016000610afa6114bb565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611461565b610b3b610b356114bb565b8261179d565b50565b3360009081526007602090815260408083206001600160a01b0394909416835292905220805460ff19166001179055565b6001600160a01b031660009081526020819052604090205490565b610b926114bb565b6001600160a01b0316610ba3610d78565b6001600160a01b031614610bfe576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b610c566114bb565b6001600160a01b0316610c67610d78565b6001600160a01b031614610cc2576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60005b8151811015610d1a57600160066000848481518110610ce057fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610cc5565b5050565b6000610d5582604051806060016040528060248152602001611e7560249139610d4e86610d496114bb565b6110fe565b9190611706565b9050610d6983610d636114bb565b836114bf565b610d73838361179d565b505050565b60055461010090046001600160a01b031690565b6000610d9887336113da565b610dd35760405162461bcd60e51b815260040180806020018281038252603b815260200180611f9b603b913960400191505060405180910390fd5b610ddf87868887611899565b979650505050505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109f65780601f106109cb576101008083540402835291602001916109f6565b3360009081526006602052604090205460ff1680610e78575033610e6d610d78565b6001600160a01b0316145b610eb35760405162461bcd60e51b8152600401808060200182810382526021815260200180611f7a6021913960400191505060405180910390fd5b610b3b3382611b54565b6000610a14610eca6114bb565b84610ac38560405180606001604052806025815260200161200d6025913960016000610ef46114bb565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611706565b6000610a14610f326114bb565b84846115ab565b828114610f775760405162461bcd60e51b8152600401808060200182810382526042815260200180611d966042913960600191505060405180910390fd5b60005b83811015610fed57828282818110610f8e57fe5b905060200201356001600160a01b031660086000878785818110610fae57fe5b6020908102929092013583525081019190915260400160002080546001600160a01b0319166001600160a01b0392909216919091179055600101610f7a565b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6103e890565b7f000000000000000000000000000000000000000000000000000000000000000090565b3360009081526006602052604090205460ff168061106f575033611064610d78565b6001600160a01b0316145b6110aa5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f7a6021913960400191505060405180910390fd5b610d1a8282611b54565b6000836c45786368616e6765526174657360981b14156110f557507f0000000000000000000000000000000000000000000000000000000000000000610acc565b50309392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6111316114bb565b6001600160a01b0316611142610d78565b6001600160a01b03161461119d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166111e25760405162461bcd60e51b8152600401808060200182810382526026815260200180611d4e6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6000828152600860205260408082205483835290822054848352829182916001600160a01b039182169116811580159061129957506000868152600860205260409020546001600160a01b031615155b6112d45760405162461bcd60e51b8152600401808060200182810382526044815260200180611f126044913960600191505060405180910390fd5b6040805163c5c031c960e01b81526001600160a01b038481166004830152602482018b9052838116604483015291516000927f0000000000000000000000000000000000000000000000000000000000000000169163c5c031c991606480830192602092919082900301818787803b15801561134f57600080fd5b505af1158015611363573d6000803e3d6000fd5b505050506040513d602081101561137957600080fd5b50517f0000000000000000000000000000000000000000000000000000000000000000945090506113c06103e86113ba6113b38288611c44565b8490611408565b90611ca1565b95506113cc8187611c44565b945050505093509350939050565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60008261141757506000610a18565b8282028284828161142457fe5b0414610acc5760405162461bcd60e51b8152600401808060200182810382526021815260200180611e2c6021913960400191505060405180910390fd5b600082820183811015610acc576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b6001600160a01b0383166115045760405162461bcd60e51b8152600401808060200182810382526024815260200180611f566024913960400191505060405180910390fd5b6001600160a01b0382166115495760405162461bcd60e51b8152600401808060200182810382526022815260200180611d746022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166115f05760405162461bcd60e51b8152600401808060200182810382526025815260200180611eed6025913960400191505060405180910390fd5b6001600160a01b0382166116355760405162461bcd60e51b8152600401808060200182810382526023815260200180611d096023913960400191505060405180910390fd5b611640838383610d73565b61167d81604051806060016040528060268152602001611dd8602691396001600160a01b0386166000908152602081905260409020549190611706565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546116ac9082611461565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156117955760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561175a578181015183820152602001611742565b50505050905090810190601f1680156117875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0382166117e25760405162461bcd60e51b8152600401808060200182810382526021815260200180611ecc6021913960400191505060405180910390fd5b6117ee82600083610d73565b61182b81604051806060016040528060228152602001611d2c602291396001600160a01b0385166000908152602081905260409020549190611706565b6001600160a01b0383166000908152602081905260409020556002546118519082611c44565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008281526008602052604080822054838352908220546001600160a01b039182169116816118f95760405162461bcd60e51b815260040180806020018281038252602e815260200180611dfe602e913960400191505060405180910390fd5b6001600160a01b03811661193e5760405162461bcd60e51b8152600401808060200182810382526033815260200180611e996033913960400191505060405180910390fd5b816001600160a01b0316634a4fbeec886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561198b57600080fd5b505afa15801561199f573d6000803e3d6000fd5b505050506040513d60208110156119b557600080fd5b5051156119f35760405162461bcd60e51b8152600401808060200182810382526037815260200180611fd66037913960400191505060405180910390fd5b6119fe868686611249565b90505080935050816001600160a01b03166379cc679088886040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611a5c57600080fd5b505af1158015611a70573d6000803e3d6000fd5b50505050806001600160a01b031663da1919b388856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611acb57600080fd5b505af1158015611adf573d6000803e3d6000fd5b50505050806001600160a01b031663f435f5a7886040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015611b3257600080fd5b505af1158015611b46573d6000803e3d6000fd5b505050505050949350505050565b6001600160a01b038216611baf576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611bbb60008383610d73565b600254611bc89082611461565b6002556001600160a01b038216600090815260208190526040902054611bee9082611461565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082821115611c9b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611cf7576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611d0057fe5b04939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737373657453796e746846726f6d43757272656e63794b65793a20556e657175616c205f63757272656e63794b65797320616e64205f73796e746873206c656e6774687345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655f5f63616c63756c617465416e64537761703a20536f757263652073796e7468206973206e6f74206c6973746564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e63655f5f63616c63756c617465416e64537761703a2044657374696e6174696f6e2073796e7468206973206e6f74206c697374656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f2061646472657373676574416d6f756e7473466f7245786368616e67653a2043757272656e6379206b657920646f65736e2774206861766520616e206173736f6369617465642073796e746845524332303a20617070726f76652066726f6d20746865207a65726f20616464726573736d73672e73656e646572206973206e6f74206f776e6572206f72206d696e74657265786368616e67654f6e426568616c6657697468547261636b696e673a204e6f7420617070726f76656420746f20616374206f6e20626568616c665f5f63616c63756c617465416e64537761703a2043616e6e6f7420736574746c6520647572696e672077616974696e6720706572696f6445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220bb2a2c50bf6871960c9baecc1f4eaf3f02ca0ae08415aa22c655d79cc9b0a4a864736f6c634300060c0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77';
}

// prettier-ignore
export const MockSynthetixIntegratee = contract<MockSynthetixIntegratee, MockSynthetixIntegrateeArgs>(MockSynthetixIntegrateeBytecode)`
  constructor(string _name, string _symbol, uint8 _decimals, address _centralizedRateProvider, address _exchangeRates, uint256 _fee)
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
  event Transfer(address indexed from, address indexed to, uint256 value)
  function addMinters(address[] _minters)
  function allowance(address owner, address spender) view returns (uint256)
  function approve(address spender, uint256 amount) returns (bool)
  function approveExchangeOnBehalf(address _delegate)
  function balanceOf(address account) view returns (uint256)
  function burn(uint256 amount)
  function burnFrom(address account, uint256 amount)
  function canExchangeFor(address _authorizer, address _delegate) view returns (bool canExchange_)
  function decimals() view returns (uint8)
  function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)
  function exchangeOnBehalfWithTracking(address _exchangeForAddress, bytes32 _srcCurrencyKey, uint256 _srcAmount, bytes32 _destinationCurrencyKey, address, bytes32) returns (uint256 amountReceived_)
  function getAmountsForExchange(uint256 _srcAmount, bytes32 _srcCurrencyKey, bytes32 _destCurrencyKey) returns (uint256 amountReceived_, uint256 fee_, uint256 exchangeFeeRate_)
  function getExchangeRates() view returns (address exchangeRates_)
  function getFee() view returns (uint256 fee_)
  function getSynthFromCurrencyKey(bytes32 _currencyKey) view returns (address synth_)
  function getUnitFee() pure returns (uint256 fee_)
  function increaseAllowance(address spender, uint256 addedValue) returns (bool)
  function mint(uint256 _amount)
  function mintFor(address _who, uint256 _amount)
  function name() view returns (string)
  function owner() view returns (address)
  function renounceOwnership()
  function requireAndGetAddress(bytes32 _name, string) view returns (address resolvedAddress_)
  function setSynthFromCurrencyKeys(bytes32[] _currencyKeys, address[] _synths)
  function settle(address, bytes32) returns (uint256, uint256, uint256)
  function symbol() view returns (string)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
  function transferOwnership(address newOwner)
`;
