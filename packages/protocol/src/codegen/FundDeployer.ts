/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type FundDeployerArgs = [
  _dispatcher: AddressLike,
  _vaultLib: AddressLike,
  _vaultCallContracts: AddressLike[],
  _vaultCallSelectors: BytesLike[],
];

// prettier-ignore
export interface FundDeployer extends Contract<FundDeployer> {
  cancelMigration: Send<(_vaultProxy: AddressLike) => void, FundDeployer>
  cancelMigrationEmergency: Send<(_vaultProxy: AddressLike) => void, FundDeployer>
  createMigratedFundConfig: Send<(_denominationAsset: AddressLike, _sharesActionTimelock: BigNumberish, _feeManagerConfigData: BytesLike, _policyManagerConfigData: BytesLike) => string, FundDeployer>
  createNewFund: Send<(_fundOwner: AddressLike, _fundName: string, _denominationAsset: AddressLike, _sharesActionTimelock: BigNumberish, _feeManagerConfigData: BytesLike, _policyManagerConfigData: BytesLike) => { comptrollerProxy_: string, vaultProxy_: string }, FundDeployer>
  deregisterVaultCalls: Send<(_contracts: AddressLike[], _selectors: BytesLike[]) => void, FundDeployer>
  executeMigration: Send<(_vaultProxy: AddressLike) => void, FundDeployer>
  executeMigrationEmergency: Send<(_vaultProxy: AddressLike) => void, FundDeployer>
  getComptrollerLib: Call<() => string, FundDeployer>
  getCreator: Call<() => string, FundDeployer>
  getDispatcher: Call<() => string, FundDeployer>
  getOwner: Call<() => string, FundDeployer>
  getPendingComptrollerProxyCreator: Call<(_comptrollerProxy: AddressLike) => string, FundDeployer>
  getReleaseStatus: Call<() => BigNumber, FundDeployer>
  getVaultLib: Call<() => string, FundDeployer>
  invokeMigrationInCancelHook: Send<(arg0: AddressLike, arg1: AddressLike, arg2: AddressLike, arg3: AddressLike) => void, FundDeployer>
  invokeMigrationOutHook: Send<(_hook: BigNumberish, _vaultProxy: AddressLike, arg2: AddressLike, arg3: AddressLike, arg4: AddressLike) => void, FundDeployer>
  isRegisteredVaultCall: Call<(_contract: AddressLike, _selector: BytesLike) => boolean, FundDeployer>
  registerVaultCalls: Send<(_contracts: AddressLike[], _selectors: BytesLike[]) => void, FundDeployer>
  setComptrollerLib: Send<(_comptrollerLib: AddressLike) => void, FundDeployer>
  setReleaseStatus: Send<(_nextStatus: BigNumberish) => void, FundDeployer>
  signalMigration: Send<(_vaultProxy: AddressLike, _comptrollerProxy: AddressLike) => void, FundDeployer>
  signalMigrationEmergency: Send<(_vaultProxy: AddressLike, _comptrollerProxy: AddressLike) => void, FundDeployer>
}

let FundDeployerBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  FundDeployerBytecode =
    '0x60e06040523480156200001157600080fd5b50604051620031d9380380620031d983398101604081905262000034916200035a565b81511562000048576200004882826200006f565b505033606090811b6080526001600160601b031992811b831660a0521b1660c05262000573565b80518251146200009c5760405162461bcd60e51b81526004016200009390620004c5565b60405180910390fd5b60005b82518110156200020157620000e3838281518110620000ba57fe5b6020026020010151838381518110620000cf57fe5b60200260200101516200020660201b60201c565b15620001035760405162461bcd60e51b81526004016200009390620004b3565b60018060008584815181106200011557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008484815181106200014c57fe5b60200260200101516001600160e01b0319166001600160e01b031916815260200190815260200160002060006101000a81548160ff0219169083151502179055508281815181106200019a57fe5b60200260200101516001600160a01b03167f355d4742de92efa1dcd9085b88ede27d7cfda96747ea062a59010a992c8af150838381518110620001d957fe5b6020026020010151604051620001f09190620004a3565b60405180910390a26001016200009f565b505050565b6001600160a01b03821660009081526001602090815260408083206001600160e01b03198516845290915290205460ff165b92915050565b805162000238816200054e565b600082601f8301126200025d57600080fd5b8151620002746200026e82620004fe565b620004d7565b915081818352602084019350602081019050838560208402820111156200029a57600080fd5b60005b83811015620002ca5781620002b388826200023e565b84525060209283019291909101906001016200029d565b5050505092915050565b600082601f830112620002e657600080fd5b8151620002f76200026e82620004fe565b915081818352602084019350602081019050838560208402820111156200031d57600080fd5b60005b83811015620002ca57816200033688826200034d565b845250602092830192919091019060010162000320565b8051620002388162000568565b600080600080608085870312156200037157600080fd5b60006200037f87876200023e565b945050602062000392878288016200023e565b93505060408501516001600160401b03811115620003af57600080fd5b620003bd878288016200024b565b92505060608501516001600160401b03811115620003da57600080fd5b620003e887828801620002d4565b91505092959194509250565b620003ff8162000535565b82525050565b600062000414602d836200051f565b7f5f5f72656769737465725661756c7443616c6c733a2043616c6c20616c72656181526c191e481c9959da5cdd195c9959609a1b602082015260400192915050565b6000620004656029836200051f565b7f5f5f72656769737465725661756c7443616c6c733a20556e6576656e20696e7081526875742061727261797360b81b602082015260400192915050565b60208101620002388284620003f4565b60208082528101620002388162000405565b60208082528101620002388162000456565b6040518181016001600160401b0381118282101715620004f657600080fd5b604052919050565b60006001600160401b038211156200051557600080fd5b5060209081020190565b90815260200190565b6000620002388262000542565b6001600160e01b03191690565b6001600160a01b031690565b620005598162000528565b81146200056557600080fd5b50565b620005598162000535565b60805160601c60a05160601c60c05160601c612c03620005d66000398061090a52806114a052806117125250806107e252806109935280610c8f5280610e9c5280611123528061146e52806116e4525080610425528061096c5250612c036000f3fe60806040523480156200001157600080fd5b5060043610620001605760003560e01c80639eb2c7b211620000c9578063d2456de11162000087578063d2456de114620002bd578063da29fcfe14620002d4578063dc77205314620002eb578063df369ba71462000311578063ebb3d5891462000328578063f0bb66ac14620003325762000160565b80639eb2c7b21462000248578063a08d967d146200025f578063a5fede1d1462000276578063c108b47d146200028f578063c166f9ea14620002a65762000160565b806351dfdb48116200012357806351dfdb4814620001e5578063682cea1914620001fc5780636f022ac4146200020657806378ed2293146200021d578063893d20e8146200023457806393a2ecd9146200023e5762000160565b80630d2fcd7614620001655780630ee2cb10146200017e5780630fe6972b14620001a057806328eb9ca514620001b75780633f84c12c14620001ce575b600080fd5b6200017c6200017636600462001972565b62000359565b005b6200018862000423565b60405162000197919062002458565b60405180910390f35b6200017c620001b136600462001c89565b62000448565b6200017c620001c836600462001dc2565b62000670565b6200017c620001df36600462001d42565b620007bc565b6200017c620001f636600462001972565b620008f8565b6200018862000908565b6200017c6200021736600462001972565b6200092c565b6200017c6200022e36600462001972565b62000939565b6200018862000946565b6200018862000a2b565b6200017c6200025936600462001972565b62000a3a565b620001886200027036600462001972565b62000a47565b6200028062000a68565b60405162000197919062002695565b62000188620002a036600462001be5565b62000a78565b6200017c620002b7366004620019bc565b62000b63565b6200017c620002ce366004620019bc565b62000b75565b6200017c620002e536600462001c89565b62000b83565b62000302620002fc36600462001ac3565b62000c55565b60405162000197919062002628565b6200017c62000322366004620019fb565b62000c4f565b6200018862000c8d565b620003496200034336600462001af8565b62000cb1565b6040516200019792919062002478565b6200036362000946565b6001600160a01b0316336001600160a01b0316146200039f5760405162461bcd60e51b8152600401620003969062002723565b60405180910390fd5b6000546001600160a01b031615620003cb5760405162461bcd60e51b81526004016200039690620026a5565b600080546001600160a01b0319166001600160a01b0383161790556040517f38e37d5fdf60e4358769c3b616594ad451626b1e023c65eaa1062116feadacf8906200041890839062002458565b60405180910390a150565b7f00000000000000000000000000000000000000000000000000000000000000005b90565b6200045262000946565b6001600160a01b0316336001600160a01b031614620004855760405162461bcd60e51b8152600401620003969062002723565b82620004a55760405162461bcd60e51b81526004016200039690620027a1565b828114620004c75760405162461bcd60e51b81526004016200039690620027c5565b60005b8381101562000669576200051f858583818110620004e457fe5b9050602002016020810190620004fb919062001972565b8484848181106200050857fe5b9050602002016020810190620002fc919062001d21565b6200053e5760405162461bcd60e51b8152600401620003969062002735565b6000600160008787858181106200055157fe5b905060200201602081019062000568919062001972565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008585858181106200059757fe5b9050602002016020810190620005ae919062001d21565b6001600160e01b03191681526020810191909152604001600020805460ff1916911515919091179055848482818110620005e457fe5b9050602002016020810190620005fb919062001972565b6001600160a01b03167f04a77425d9eba3b1260e976806c0cdefae7f41bb1106222790dd45e863ceaf978484848181106200063257fe5b905060200201602081019062000649919062001d21565b60405162000658919062002638565b60405180910390a2600101620004ca565b5050505050565b6200067a62000946565b6001600160a01b0316336001600160a01b031614620006ad5760405162461bcd60e51b8152600401620003969062002711565b6000816002811115620006bc57fe5b1415620006dd5760405162461bcd60e51b81526004016200039690620027d7565b6000546001600160a01b0316620007085760405162461bcd60e51b81526004016200039690620026ff565b600054600160a01b900460ff168060028111156200072257fe5b8260028111156200072f57fe5b1415620007505760405162461bcd60e51b81526004016200039690620027b3565b6000805483919060ff60a01b1916600160a01b8360028111156200077057fe5b02179055508160028111156200078257fe5b8160028111156200078f57fe5b6040517ffaab041807e925180f5d7036a295923ff66f30f9d7957c96b898d16b0e90b7d890600090a35050565b6002856004811115620007cb57fe5b14620007d75762000669565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008225760405162461bcd60e51b8152600401620003969062002759565b6000846001600160a01b0316635a53e3486040518163ffffffff1660e01b815260040160206040518083038186803b1580156200085e57600080fd5b505afa15801562000873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200089991906200199b565b9050806001600160a01b0316632b68b9c66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620008d757600080fd5b505af1158015620008ec573d6000803e3d6000fd5b50505050505050505050565b6200090581600062000daf565b50565b7f000000000000000000000000000000000000000000000000000000000000000090565b620009058160006200102e565b6200090581600162000daf565b600080600054600160a01b900460ff1660028111156200096257fe5b14156200099157507f000000000000000000000000000000000000000000000000000000000000000062000445565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015620009eb57600080fd5b505afa15801562000a00573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a2691906200199b565b905090565b6000546001600160a01b031690565b620009058160016200102e565b6001600160a01b03808216600090815260026020526040902054165b919050565b600054600160a01b900460ff1690565b60006001600054600160a01b900460ff16600281111562000a9557fe5b1462000ab55760405162461bcd60e51b81526004016200039690620026c9565b62000b2f878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152506001925062001195915050565b6001600160a01b038116600090815260026020526040902080546001600160a01b0319163317905590509695505050505050565b62000b71828260016200133b565b5050565b62000b71828260006200133b565b62000b8d62000946565b6001600160a01b0316336001600160a01b03161462000bc05760405162461bcd60e51b8152600401620003969062002723565b8262000be05760405162461bcd60e51b815260040162000396906200278f565b62000c4f848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208088028281018201909352878252909350879250869182918501908490808284376000920191909152506200150692505050565b50505050565b6001600160a01b03821660009081526001602090815260408083206001600160e01b03198516845290915290205460ff165b92915050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000806001600054600160a01b900460ff16600281111562000ccf57fe5b1462000cef5760405162461bcd60e51b81526004016200039690620026c9565b62000d9d8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8d018190048102820181019092528b81528e93508d9250908c908c908190840183828082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506200168e92505050565b91509150995099975050505050505050565b6001600054600160a01b900460ff16600281111562000dca57fe5b1462000dea5760405162461bcd60e51b81526004016200039690620026c9565b604051633ef03e7560e11b815282906001600160a01b03821690637de07cea9062000e1a90339060040162002468565b60206040518083038186803b15801562000e3357600080fd5b505afa15801562000e48573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e6e919062001d00565b62000e8d5760405162461bcd60e51b8152600401620003969062002747565b604051630fb5b3f960e31b81527f0000000000000000000000000000000000000000000000000000000000000000906000906001600160a01b03831690637dad9fc89062000ee090889060040162002458565b60806040518083038186803b15801562000ef957600080fd5b505afa15801562000f0e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f34919062001a65565b50506040516338b3eb1b60e01b81529092506001600160a01b03841691506338b3eb1b9062000f6a9088908890600401620025a1565b600060405180830381600087803b15801562000f8557600080fd5b505af115801562000f9a573d6000803e3d6000fd5b50506040516382d3a1dd60e01b81526001600160a01b03841692506382d3a1dd915062000fcf908890600190600401620025a1565b600060405180830381600087803b15801562000fea57600080fd5b505af115801562000fff573d6000803e3d6000fd5b505050506001600160a01b0316600090815260026020526040902080546001600160a01b031916905550505050565b6001600054600160a01b900460ff1660028111156200104957fe5b14620010695760405162461bcd60e51b81526004016200039690620026c9565b604051633ef03e7560e11b815282906001600160a01b03821690637de07cea906200109990339060040162002468565b60206040518083038186803b158015620010b257600080fd5b505afa158015620010c7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010ed919062001d00565b6200110c5760405162461bcd60e51b8152600401620003969062002747565b604051634e4ea46d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639c9d48da906200115c9086908690600401620025a1565b600060405180830381600087803b1580156200117757600080fd5b505af11580156200118c573d6000803e3d6000fd5b50505050505050565b60006001600160a01b038616620011c05760405162461bcd60e51b815260040162000396906200276b565b606063399ae72460e01b8787604051602401620011df929190620025c0565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252600054915190925082916001600160a01b03169062001230906200186b565b6200123d92919062002648565b604051809103906000f0801580156200125a573d6000803e3d6000fd5b5091506000855111806200126f575060008451115b15620012da576040516396aed58760e01b81526001600160a01b038316906396aed58790620012a590889088906004016200266c565b600060405180830381600087803b158015620012c057600080fd5b505af1158015620012d5573d6000803e3d6000fd5b505050505b821515876001600160a01b0316336001600160a01b03167f0e6310be2c106224ea5db41e7f599982b85c8524b0e7cd0c4fb88e2ac46554b5858a8a8a604051620013289493929190620025df565b60405180910390a4505b95945050505050565b6001600054600160a01b900460ff1660028111156200135657fe5b14620013765760405162461bcd60e51b81526004016200039690620026c9565b6001600160a01b038281166000908152600260205260409020548391163314620013b45760405162461bcd60e51b81526004016200039690620026ed565b604051633ef03e7560e11b815284906001600160a01b03821690637de07cea90620013e490339060040162002468565b60206040518083038186803b158015620013fd57600080fd5b505afa15801562001412573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001438919062001d00565b620014575760405162461bcd60e51b8152600401620003969062002747565b604051633457e6e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d15f9b9c90620014cb90889088907f00000000000000000000000000000000000000000000000000000000000000009089906004016200249e565b600060405180830381600087803b158015620014e657600080fd5b505af1158015620014fb573d6000803e3d6000fd5b505050505050505050565b80518251146200152a5760405162461bcd60e51b815260040162000396906200277d565b60005b825181101562001689576200156b8382815181106200154857fe5b60200260200101518383815181106200155d57fe5b602002602001015162000c55565b156200158b5760405162461bcd60e51b81526004016200039690620026db565b60018060008584815181106200159d57fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000848481518110620015d457fe5b60200260200101516001600160e01b0319166001600160e01b031916815260200190815260200160002060006101000a81548160ff0219169083151502179055508281815181106200162257fe5b60200260200101516001600160a01b03167f355d4742de92efa1dcd9085b88ede27d7cfda96747ea062a59010a992c8af1508383815181106200166157fe5b602002602001015160405162001678919062002638565b60405180910390a26001016200152d565b505050565b6000806001600160a01b038816620016ba5760405162461bcd60e51b81526004016200039690620026b7565b620016ca86868686600062001195565b6040516322a0c08b60e01b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906322a0c08b9062001741907f0000000000000000000000000000000000000000000000000000000000000000908c9087908d90600401620024db565b602060405180830381600087803b1580156200175c57600080fd5b505af115801562001771573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200179791906200199b565b6040516382d3a1dd60e01b81529091506001600160a01b038316906382d3a1dd90620017cb908490600090600401620025a1565b600060405180830381600087803b158015620017e657600080fd5b505af1158015620017fb573d6000803e3d6000fd5b50505050856001600160a01b0316886001600160a01b0316336001600160a01b03167f38d3196918721ec4627522d424d47f608e3f0f7e7a8f8abe5369150f7fc4b2a585858c8b8b8b604051620018589695949392919062002527565b60405180910390a4965096945050505050565b6102e180620028ed83390190565b803562000c878162002898565b805162000c878162002898565b60008083601f840112620018a657600080fd5b50813567ffffffffffffffff811115620018bf57600080fd5b602083019150836020820283011115620018d857600080fd5b9250929050565b805162000c8781620028af565b803562000c8781620028ba565b60008083601f8401126200190c57600080fd5b50813567ffffffffffffffff8111156200192557600080fd5b602083019150836001820283011115620018d857600080fd5b803562000c8781620028c5565b803562000c8781620028d3565b803562000c8781620028e1565b805162000c8781620028e1565b6000602082840312156200198557600080fd5b600062001993848462001879565b949350505050565b600060208284031215620019ae57600080fd5b600062001993848462001886565b60008060408385031215620019d057600080fd5b6000620019de858562001879565b9250506020620019f18582860162001879565b9150509250929050565b6000806000806080858703121562001a1257600080fd5b600062001a20878762001879565b945050602062001a338782880162001879565b935050604062001a468782880162001879565b925050606062001a598782880162001879565b91505092959194509250565b6000806000806080858703121562001a7c57600080fd5b600062001a8a878762001886565b945050602062001a9d8782880162001886565b935050604062001ab08782880162001886565b925050606062001a598782880162001965565b6000806040838503121562001ad757600080fd5b600062001ae5858562001879565b9250506020620019f185828601620018ec565b600080600080600080600080600060c08a8c03121562001b1757600080fd5b600062001b258c8c62001879565b99505060208a013567ffffffffffffffff81111562001b4357600080fd5b62001b518c828d01620018f9565b9850985050604062001b668c828d0162001879565b965050606062001b798c828d0162001958565b95505060808a013567ffffffffffffffff81111562001b9757600080fd5b62001ba58c828d01620018f9565b945094505060a08a013567ffffffffffffffff81111562001bc557600080fd5b62001bd38c828d01620018f9565b92509250509295985092959850929598565b6000806000806000806080878903121562001bff57600080fd5b600062001c0d898962001879565b965050602062001c2089828a0162001958565b955050604087013567ffffffffffffffff81111562001c3e57600080fd5b62001c4c89828a01620018f9565b9450945050606087013567ffffffffffffffff81111562001c6c57600080fd5b62001c7a89828a01620018f9565b92509250509295509295509295565b6000806000806040858703121562001ca057600080fd5b843567ffffffffffffffff81111562001cb857600080fd5b62001cc68782880162001893565b9450945050602085013567ffffffffffffffff81111562001ce657600080fd5b62001cf48782880162001893565b95989497509550505050565b60006020828403121562001d1357600080fd5b6000620019938484620018df565b60006020828403121562001d3457600080fd5b6000620019938484620018ec565b600080600080600060a0868803121562001d5b57600080fd5b600062001d6988886200193e565b955050602062001d7c8882890162001879565b945050604062001d8f8882890162001879565b935050606062001da28882890162001879565b925050608062001db58882890162001879565b9150509295509295909350565b60006020828403121562001dd557600080fd5b60006200199384846200194b565b62001dee816200282d565b82525050565b62001dee81620027f6565b62001dee8162002803565b62001dee8162002808565b600062001e2282620027e9565b62001e2e8185620027ed565b935062001e4081856020860162002854565b62001e4b8162002883565b9093019392505050565b62001dee816200283a565b600062001e6f603283620027ed565b7f736574436f6d7074726f6c6c65724c69623a20546869732076616c75652063618152716e206f6e6c7920626520736574206f6e636560701b602082015260400192915050565b600062001ec5602783620027ed565b7f5f5f6372656174654e657746756e643a205f6f776e65722063616e6e6f7420628152666520656d70747960c81b602082015260400192915050565b600062001f10601383620027ed565b7252656c65617365206973206e6f74204c69766560681b815260200192915050565b600062001f41602d83620027ed565b7f5f5f72656769737465725661756c7443616c6c733a2043616c6c20616c72656181526c191e481c9959da5cdd195c9959609a1b602082015260400192915050565b600062001f92603883620027ed565b7f4f6e6c792074686520436f6d7074726f6c6c657250726f78792063726561746f81527f722063616e2063616c6c20746869732066756e6374696f6e0000000000000000602082015260400192915050565b600062001ff3604c83620027ed565b7f73657452656c656173655374617475733a2043616e206f6e6c7920736574207481527f68652072656c6561736520737461747573207768656e20636f6d7074726f6c6c60208201526b195c931a58881a5cc81cd95d60a21b604082015260600192915050565b600062002069603783620027ed565b7f73657452656c656173655374617475733a204f6e6c7920746865206f776e657281527f2063616e2063616c6c20746869732066756e6374696f6e000000000000000000602082015260400192915050565b6000620020ca602e83620027ed565b7f4f6e6c792074686520636f6e7472616374206f776e65722063616e2063616c6c81526d103a3434b990333ab731ba34b7b760911b602082015260400192915050565b60006200211c602983620027ed565b7f646572656769737465725661756c7443616c6c733a2043616c6c206e6f7420728152681959da5cdd195c995960ba1b602082015260400192915050565b600062002169603383620027ed565b7f4f6e6c792061207065726d697373696f6e6564206d69677261746f722063616e8152721031b0b636103a3434b990333ab731ba34b7b760691b602082015260400192915050565b6000620021c0603d83620027ed565b7f706f73744d6967726174654f726967696e486f6f6b3a204f6e6c79204469737081527f6174636865722063616e2063616c6c20746869732066756e6374696f6e000000602082015260400192915050565b600062002221603c83620027ed565b7f5f5f6465706c6f79436f6d7074726f6c6c657250726f78793a205f64656e6f6d81527f696e6174696f6e41737365742063616e6e6f7420626520656d70747900000000602082015260400192915050565b600062002282602983620027ed565b7f5f5f72656769737465725661756c7443616c6c733a20556e6576656e20696e7081526875742061727261797360b81b602082015260400192915050565b6000620022cf602483620027ed565b7f72656769737465725661756c7443616c6c733a20456d707479205f636f6e74728152636163747360e01b602082015260400192915050565b600062002317602683620027ed565b7f646572656769737465725661756c7443616c6c733a20456d707479205f636f6e81526574726163747360d01b602082015260400192915050565b600062002361603383620027ed565b7f73657452656c656173655374617475733a205f6e657874537461747573206973815272207468652063757272656e742073746174757360681b602082015260400192915050565b6000620023b8602983620027ed565b7f646572656769737465725661756c7443616c6c733a20556e6576656e20696e7081526875742061727261797360b81b602082015260400192915050565b600062002405603383620027ed565b7f73657452656c656173655374617475733a2043616e6e6f742072657475726e20815272746f205072654c61756e63682073746174757360681b602082015260400192915050565b62001dee8162000445565b6020810162000c87828462001df4565b6020810162000c87828462001de3565b6040810162002488828562001df4565b62002497602083018462001df4565b9392505050565b60808101620024ae828762001df4565b620024bd602083018662001df4565b620024cc604083018562001df4565b62001332606083018462001dff565b60808101620024eb828762001df4565b620024fa602083018662001df4565b62002509604083018562001df4565b81810360608301526200251d818462001e15565b9695505050505050565b60c0810162002537828962001df4565b62002546602083018862001df4565b81810360408301526200255a818762001e15565b90506200256b60608301866200244d565b81810360808301526200257f818562001e15565b905081810360a083015262002595818462001e15565b98975050505050505050565b60408101620025b1828562001df4565b62002497602083018462001dff565b60408101620025d0828562001df4565b6200249760208301846200244d565b60808101620025ef828762001df4565b620025fe60208301866200244d565b818103604083015262002612818562001e15565b905081810360608301526200251d818462001e15565b6020810162000c87828462001dff565b6020810162000c87828462001e0a565b604080825281016200265b818562001e15565b905062002497602083018462001df4565b604080825281016200267f818562001e15565b9050818103602083015262001993818462001e15565b6020810162000c87828462001e55565b6020808252810162000c878162001e60565b6020808252810162000c878162001eb6565b6020808252810162000c878162001f01565b6020808252810162000c878162001f32565b6020808252810162000c878162001f83565b6020808252810162000c878162001fe4565b6020808252810162000c87816200205a565b6020808252810162000c8781620020bb565b6020808252810162000c87816200210d565b6020808252810162000c87816200215a565b6020808252810162000c8781620021b1565b6020808252810162000c878162002212565b6020808252810162000c878162002273565b6020808252810162000c8781620022c0565b6020808252810162000c878162002308565b6020808252810162000c878162002352565b6020808252810162000c8781620023a9565b6020808252810162000c8781620023f6565b5190565b90815260200190565b600062000c878262002821565b151590565b6001600160e01b03191690565b8062000a63816200288d565b6001600160a01b031690565b600062000c878262002847565b600062000c878262002815565b600062000c8782620027f6565b60005b838110156200287157818101518382015260200162002857565b8381111562000c4f5750506000910152565b601f01601f191690565b600381106200090557fe5b620028a381620027f6565b81146200090557600080fd5b620028a38162002803565b620028a38162002808565b600581106200090557600080fd5b600381106200090557600080fd5b620028a3816200044556fe608060405234801561001057600080fd5b506040516102e13803806102e18339818101604052604081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291905050508181807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5560006060826001600160a01b0316846040518082805190602001908083835b602083106101535780518252601f199092019160209182019101610134565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101b3576040519150601f19603f3d011682016040523d82523d6000602084013e6101b8565b606091505b50915091508181906102485760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561020d5781810151838201526020016101f5565b50505050905090810190601f16801561023a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050505050505060848061025d6000396000f3fe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc543660008037600080366000846127105a03f43d806000803e818015604957816000f35b816000fdfea2646970667358221220479fe1a45f639b2b28264f0664c5040a754e68dd3840b29a2a20405474a7d2b164736f6c634300060c0033a26469706673582212207a724f61b679c518dabefe6dfd8b2d4dd6202fd8a5235ce6d505cea6c30be4d564736f6c634300060c0033';
}

// prettier-ignore
export const FundDeployer = contract<FundDeployer, FundDeployerArgs>(FundDeployerBytecode)`
  constructor(address _dispatcher, address _vaultLib, address[] _vaultCallContracts, bytes4[] _vaultCallSelectors)
  event ComptrollerLibSet(address comptrollerLib)
  event ComptrollerProxyDeployed(address indexed creator, address comptrollerProxy, address indexed denominationAsset, uint256 sharesActionTimelock, bytes feeManagerConfigData, bytes policyManagerConfigData, bool indexed forMigration)
  event NewFundCreated(address indexed creator, address comptrollerProxy, address vaultProxy, address indexed fundOwner, string fundName, address indexed denominationAsset, uint256 sharesActionTimelock, bytes feeManagerConfigData, bytes policyManagerConfigData)
  event ReleaseStatusSet(uint8 indexed prevStatus, uint8 indexed nextStatus)
  event VaultCallDeregistered(address indexed contractAddress, bytes4 selector)
  event VaultCallRegistered(address indexed contractAddress, bytes4 selector)
  function cancelMigration(address _vaultProxy)
  function cancelMigrationEmergency(address _vaultProxy)
  function createMigratedFundConfig(address _denominationAsset, uint256 _sharesActionTimelock, bytes _feeManagerConfigData, bytes _policyManagerConfigData) returns (address comptrollerProxy_)
  function createNewFund(address _fundOwner, string _fundName, address _denominationAsset, uint256 _sharesActionTimelock, bytes _feeManagerConfigData, bytes _policyManagerConfigData) returns (address comptrollerProxy_, address vaultProxy_)
  function deregisterVaultCalls(address[] _contracts, bytes4[] _selectors)
  function executeMigration(address _vaultProxy)
  function executeMigrationEmergency(address _vaultProxy)
  function getComptrollerLib() view returns (address comptrollerLib_)
  function getCreator() view returns (address creator_)
  function getDispatcher() view returns (address dispatcher_)
  function getOwner() view returns (address owner_)
  function getPendingComptrollerProxyCreator(address _comptrollerProxy) view returns (address pendingComptrollerProxyCreator_)
  function getReleaseStatus() view returns (uint8 status_)
  function getVaultLib() view returns (address vaultLib_)
  function invokeMigrationInCancelHook(address, address, address, address)
  function invokeMigrationOutHook(uint8 _hook, address _vaultProxy, address, address, address)
  function isRegisteredVaultCall(address _contract, bytes4 _selector) view returns (bool isRegistered_)
  function registerVaultCalls(address[] _contracts, bytes4[] _selectors)
  function setComptrollerLib(address _comptrollerLib)
  function setReleaseStatus(uint8 _nextStatus)
  function signalMigration(address _vaultProxy, address _comptrollerProxy)
  function signalMigrationEmergency(address _vaultProxy, address _comptrollerProxy)
`;
