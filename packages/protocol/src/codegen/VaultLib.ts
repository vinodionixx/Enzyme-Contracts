/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface VaultLib extends Contract<VaultLib> {
  addTrackedAsset: Send<(_asset: AddressLike) => void, VaultLib>
  allowance: Call<(_owner: AddressLike, _spender: AddressLike) => BigNumber, VaultLib>
  approve: Send<(arg0: AddressLike, arg1: BigNumberish) => boolean, VaultLib>
  approveAssetSpender: Send<(_asset: AddressLike, _target: AddressLike, _amount: BigNumberish) => void, VaultLib>
  balanceOf: Call<(_account: AddressLike) => BigNumber, VaultLib>
  burnShares: Send<(_target: AddressLike, _amount: BigNumberish) => void, VaultLib>
  callOnContract: Send<(_contract: AddressLike, _callData: BytesLike) => void, VaultLib>
  canMigrate: Call<(_who: AddressLike) => boolean, VaultLib>
  decimals: Call<() => BigNumber, VaultLib>
  getAccessor: Call<() => string, VaultLib>
  getCreator: Call<() => string, VaultLib>
  getMigrator: Call<() => string, VaultLib>
  getOwner: Call<() => string, VaultLib>
  getTrackedAssets: Call<() => string[], VaultLib>
  getVaultLib: Call<() => string, VaultLib>
  init: Send<(_owner: AddressLike, _accessor: AddressLike, _fundName: string) => void, VaultLib>
  isTrackedAsset: Call<(_asset: AddressLike) => boolean, VaultLib>
  mintShares: Send<(_target: AddressLike, _amount: BigNumberish) => void, VaultLib>
  name: Call<() => string, VaultLib>
  proxiableUUID: Call<() => string, VaultLib>
  removeTrackedAsset: Send<(_asset: AddressLike) => void, VaultLib>
  setAccessor: Send<(_nextAccessor: AddressLike) => void, VaultLib>
  setMigrator: Send<(_nextMigrator: AddressLike) => void, VaultLib>
  setVaultLib: Send<(_nextVaultLib: AddressLike) => void, VaultLib>
  symbol: Call<() => string, VaultLib>
  totalSupply: Call<() => BigNumber, VaultLib>
  transfer: Send<(arg0: AddressLike, arg1: BigNumberish) => boolean, VaultLib>
  transferFrom: Send<(arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish) => boolean, VaultLib>
  transferShares: Send<(_from: AddressLike, _to: AddressLike, _amount: BigNumberish) => void, VaultLib>
  withdrawAssetTo: Send<(_asset: AddressLike, _target: AddressLike, _amount: BigNumberish) => void, VaultLib>
}

let VaultLibBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  VaultLibBytecode =
    '0x608060405234801561001057600080fd5b506122ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063a90cce4b116100a2578063c6f2a4b411610071578063c6f2a4b414610681578063cd63d578146106b7578063dd62ed3e146106bf578063ee7a7c04146106ed576101da565b8063a90cce4b1461054d578063ab9253ac146105cd578063bfc77beb146105f3578063c4b9737014610629576101da565b80637de07cea116100de5780637de07cea14610517578063893d20e81461053d57806395d89b4114610545578063a9059cbb1461025c576101da565b806370a08231146104a557806370fbf134146104cb578063797ed339146104f1576101da565b80634140d6071161017c57806352d1902d1161014b57806352d1902d146104045780635a53e3481461040c5780635c9a6d3714610414578063682cea191461049d576101da565b80634140d60714610356578063495d753c1461037c5780634ef0762e146103b2578063528c198a146103d8576101da565b806318160ddd116101b857806318160ddd146102c057806323b872dd146102da57806323cf311814610310578063313ce56714610338576101da565b806306fdde03146101df578063095ea7b31461025c5780630ee2cb101461029c575b600080fd5b6101e7610719565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b0381351690602001356107af565b604080519115158252519081900360200190f35b6102a46107ee565b604080516001600160a01b039092168252519081900360200190f35b6102c86107fd565b60408051918252519081900360200190f35b610288600480360360608110156102f057600080fd5b506001600160a01b038135811691602081013590911690604001356107af565b6103366004803603602081101561032657600080fd5b50356001600160a01b0316610803565b005b610340610911565b6040805160ff9092168252519081900360200190f35b6103366004803603602081101561036c57600080fd5b50356001600160a01b0316610916565b6103366004803603606081101561039257600080fd5b506001600160a01b038135811691602081013590911690604001356109bd565b610336600480360360208110156103c857600080fd5b50356001600160a01b0316610a6a565b610336600480360360408110156103ee57600080fd5b506001600160a01b038135169060200135610bb5565b6102c8610c0c565b6102a4610c30565b6103366004803603606081101561042a57600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561045e57600080fd5b82018360208201111561047057600080fd5b8035906020019184600183028401116401000000008311171561049257600080fd5b509092509050610c3f565b6102a4610d2d565b6102c8600480360360208110156104bb57600080fd5b50356001600160a01b0316610d52565b610336600480360360208110156104e157600080fd5b50356001600160a01b0316610d6d565b6102886004803603602081101561050757600080fd5b50356001600160a01b0316610dbf565b6102886004803603602081101561052d57600080fd5b50356001600160a01b0316610ddd565b6102a4610e0f565b6101e7610e1e565b6103366004803603604081101561056357600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561058e57600080fd5b8201836020820111156105a057600080fd5b803590602001918460018302840111640100000000831117156105c257600080fd5b509092509050610f54565b610336600480360360208110156105e357600080fd5b50356001600160a01b031661109a565b6103366004803603606081101561060957600080fd5b506001600160a01b038135811691602081013590911690604001356110ec565b610631611145565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561066d578181015183820152602001610655565b505050509050019250505060405180910390f35b6103366004803603606081101561069757600080fd5b506001600160a01b038135811691602081013590911690604001356111a6565b6102a46112a4565b6102c8600480360360408110156106d557600080fd5b506001600160a01b03813581169160200135166112b3565b6103366004803603604081101561070357600080fd5b506001600160a01b0381351690602001356112de565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b6044820152905160009181900360640190fd5b6006546001600160a01b031690565b60025490565b6008546001600160a01b0316331461084c5760405162461bcd60e51b81526004018080602001828103825260328152602001806121186032913960400191505060405180910390fd5b6007546001600160a01b039081169082168114156108b1576040805162461bcd60e51b815260206004820152601e60248201527f7365744d69677261746f723a2056616c756520616c7265616479207365740000604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f9d0761a1fa4d686cd87f8dbf8ca52f90cf19c3c4dc36e66ebbf08fc5ba203f2c9281900390910190a15050565b601290565b6006546001600160a01b0316331461095f5760405162461bcd60e51b81526004018080602001828103825260328152602001806120946032913960400191505060405180910390fd5b6000610969610d2d565b905061097482611331565b604080516001600160a01b0380841682528416602082015281517fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df6929181900390910190a15050565b6005546001600160a01b03163314610a065760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610a1a6001600160a01b0384168383611417565b816001600160a01b0316836001600160a01b03167f6f9cbac839b826cc524f53d10416c053fce34ec15fd1001720e777cc49720e76836040518082815260200191505060405180910390a3505050565b6005546001600160a01b03163314610ab35760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610abc81610dbf565b610bb257600954601411610b17576040805162461bcd60e51b815260206004820152601f60248201527f616464547261636b656441737365743a204c696d697420657863656564656400604482015290519081900360640190fd5b6001600160a01b0381166000818152600a60209081526040808320805460ff191660019081179091556009805491820181559093527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af90920180546001600160a01b03191684179055815192835290517fa0d2bfad19dc0c6970d2a2fcff65458a6d7c4fa3b6d904f44961b2c744bdf5919281900390910190a15b50565b6005546001600160a01b03163314610bfe5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611469565b5050565b7f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a590565b6005546001600160a01b031690565b6006546001600160a01b031615610c9d576040805162461bcd60e51b815260206004820152601f60248201527f696e69743a2050726f787920616c726561647920696e697469616c697a656400604482015290519081900360640190fd5b600680546001600160a01b03191633179055610cbb60008383611ef2565b50610cc58361154f565b610cce846115f7565b7fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df66000610cf9610d2d565b60405180836001600160a01b03168152602001826001600160a01b031681526020019250505060405180910390a150505050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031660009081526003602052604090205490565b6005546001600160a01b03163314610db65760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610bb2816116eb565b6001600160a01b03166000908152600a602052604090205460ff1690565b6008546000906001600160a01b0383811691161480610e0957506007546001600160a01b038381169116145b92915050565b6008546001600160a01b031690565b60065460408051625a3d8360e91b815290516060926001600160a01b03169163b47b0600916004808301926000929190829003018186803b158015610e6257600080fd5b505afa158015610e76573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610e9f57600080fd5b8101908080516040519392919084640100000000821115610ebf57600080fd5b908301906020820185811115610ed457600080fd5b8251640100000000811182820188101715610eee57600080fd5b82525081516020918201929091019080838360005b83811015610f1b578181015183820152602001610f03565b50505050905090810190601f168015610f485780820380516001836020036101000a031916815260200191505b50604052505050905090565b6005546001600160a01b03163314610f9d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60006060846001600160a01b03168484604051808383808284376040519201945060009350909150508083038183865af19150503d8060008114610ffd576040519150601f19603f3d011682016040523d82523d6000602084013e611002565b606091505b50915091508181906110925760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561105757818101518382015260200161103f565b50505050905090810190601f1680156110845780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505050565b6006546001600160a01b031633146110e35760405162461bcd60e51b81526004018080602001828103825260328152602001806121756032913960400191505060405180910390fd5b610bb28161154f565b6005546001600160a01b031633146111355760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b611140838383611843565b505050565b606060098054806020026020016040519081016040528092919081815260200182805480156107a557602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161117f575050505050905090565b6005546001600160a01b031633146111ef5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60008390506000816001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561124357600080fd5b505afa158015611257573d6000803e3d6000fd5b505050506040513d602081101561126d57600080fd5b5051111561128a5761128a6001600160a01b038216846000611995565b61129e6001600160a01b0382168484611995565b50505050565b6007546001600160a01b031690565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6005546001600160a01b031633146113275760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611aa8565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136a57600080fd5b505afa15801561137e573d6000803e3d6000fd5b505050506040513d602081101561139457600080fd5b50517f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5146113f35760405162461bcd60e51b8152600401808060200182810382526031815260200180611fcb6031913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611140908490611b98565b6001600160a01b0382166114c4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546114d19082611c49565b6002556001600160a01b0382166000908152600360205260409020546114f79082611c49565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0381166115945760405162461bcd60e51b815260040180806020018281038252602c8152602001806121ed602c913960400191505060405180910390fd5b600580546001600160a01b038381166001600160a01b0319831681179093556040805191909216808252602082019390935281517fb5a9def940973a936e331170816650368964b0602957d4bc60f5ddc2dc1b69cd929181900390910190a15050565b6001600160a01b03811661163c5760405162461bcd60e51b81526004018080602001828103825260268152602001806120226026913960400191505060405180910390fd5b6008546001600160a01b0390811690821681141561168b5760405162461bcd60e51b815260040180806020018281038252602b81526020018061214a602b913960400191505060405180910390fd5b600880546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a7359281900390910190a15050565b6116f481610dbf565b15610bb2576001600160a01b0381166000908152600a60205260408120805460ff19169055600954905b8181101561180257826001600160a01b03166009828154811061173d57fe5b6000918252602090912001546001600160a01b031614156117fa57600182038110156117c8576009600183038154811061177357fe5b600091825260209091200154600980546001600160a01b03909216918390811061179957fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b60098054806117d357fe5b600082815260209020810160001990810180546001600160a01b0319169055019055611802565b60010161171e565b50604080516001600160a01b038416815290517f22c4fcf23b40d39b02733ec19a3975b31172f2a5b2ce5d0f1831525276cd71569181900360200190a15050565b6001600160a01b0383166118885760405162461bcd60e51b81526004018080602001828103825260258152602001806121c86025913960400191505060405180910390fd5b6001600160a01b0382166118cd5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f866023913960400191505060405180910390fd5b61190a81604051806060016040528060268152602001611ffc602691396001600160a01b0386166000908152600360205260409020549190611c94565b6001600160a01b0380851660009081526003602052604080822093909355908416815220546119399082611c49565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b801580611a1b575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156119ed57600080fd5b505afa158015611a01573d6000803e3d6000fd5b505050506040513d6020811015611a1757600080fd5b5051155b611a565760405162461bcd60e51b81526004018080602001828103825260368152602001806122436036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611140908490611b98565b6001600160a01b038216611aed5760405162461bcd60e51b81526004018080602001828103825260218152602001806121a76021913960400191505060405180910390fd5b611b2a81604051806060016040528060228152602001611fa9602291396001600160a01b0385166000908152600360205260409020549190611c94565b6001600160a01b038316600090815260036020526040902055600254611b509082611cee565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6060611bed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d139092919063ffffffff16565b80519091501561114057808060200190516020811015611c0c57600080fd5b50516111405760405162461bcd60e51b815260040180806020018281038252602a815260200180612219602a913960400191505060405180910390fd5b600082820183811015611c8d5760405162461bcd60e51b81526004018080602001828103825260238152602001806120f56023913960400191505060405180910390fd5b9392505050565b60008184841115611ce65760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561105757818101518382015260200161103f565b505050900390565b6000611c8d838360405180606001604052806026815260200161206e60269139611c94565b6060611d228484600085611d2a565b949350505050565b606082471015611d6b5760405162461bcd60e51b81526004018080602001828103825260268152602001806120486026913960400191505060405180910390fd5b611d7485611e86565b611dc5576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611e045780518252601f199092019160209182019101611de5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611e66576040519150601f19603f3d011682016040523d82523d6000602084013e611e6b565b606091505b5091509150611e7b828286611e8c565b979650505050505050565b3b151590565b60608315611e9b575081611c8d565b825115611eab5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561105757818101518382015260200161103f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f335782800160ff19823516178555611f60565b82800160010185558215611f60579182015b82811115611f60578235825591602001919060010190611f45565b50611f6c929150611f70565b5090565b5b80821115611f6c5760008155600101611f7156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63655f5f757064617465436f6465416464726573733a205f6e6578745661756c744c6962206e6f7420636f6d70617469626c6545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655f5f7365744f776e65723a205f6e6578744f776e65722063616e6e6f7420626520656d707479416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5661756c744c6962536166654d6174683a207375627472616374696f6e206f766572666c6f777365745661756c744c69623a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f724f6e6c79207468652064657369676e61746564206163636573736f722063616e206d616b6520746869732063616c6c5661756c744c6962536166654d6174683a206164646974696f6e206f766572666c6f777365744d69677261746f723a204f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e6374696f6e5f5f7365744f776e65723a205f6e6578744f776e6572206973207468652063757272656e74206f776e65727365744163636573736f723a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f20616464726573735f5f7365744163636573736f723a205f6e6578744163636573736f722063616e6e6f7420626520656d7074795361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a264697066735822122090fc5f05e01778e2b9b31ee2dd76c57b7fd81cd402832043f6f5640a89acadb064736f6c634300060c0033';
}

// prettier-ignore
export const VaultLib = contract<VaultLib>(VaultLibBytecode)`
  event AccessorSet(address prevAccessor, address nextAccessor)
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event AssetWithdrawn(address indexed asset, address indexed target, uint256 amount)
  event MigratorSet(address prevMigrator, address nextMigrator)
  event OwnerSet(address prevOwner, address nextOwner)
  event TrackedAssetAdded(address asset)
  event TrackedAssetRemoved(address asset)
  event Transfer(address indexed from, address indexed to, uint256 value)
  event VaultLibSet(address prevVaultLib, address nextVaultLib)
  function addTrackedAsset(address _asset)
  function allowance(address _owner, address _spender) view returns (uint256)
  function approve(address, uint256) returns (bool)
  function approveAssetSpender(address _asset, address _target, uint256 _amount)
  function balanceOf(address _account) view returns (uint256)
  function burnShares(address _target, uint256 _amount)
  function callOnContract(address _contract, bytes _callData)
  function canMigrate(address _who) view returns (bool canMigrate_)
  function decimals() pure returns (uint8)
  function getAccessor() view returns (address accessor_)
  function getCreator() view returns (address creator_)
  function getMigrator() view returns (address migrator_)
  function getOwner() view returns (address owner_)
  function getTrackedAssets() view returns (address[] trackedAssets_)
  function getVaultLib() view returns (address vaultLib_)
  function init(address _owner, address _accessor, string _fundName)
  function isTrackedAsset(address _asset) view returns (bool isTrackedAsset_)
  function mintShares(address _target, uint256 _amount)
  function name() view returns (string)
  function proxiableUUID() pure returns (bytes32 uuid_)
  function removeTrackedAsset(address _asset)
  function setAccessor(address _nextAccessor)
  function setMigrator(address _nextMigrator)
  function setVaultLib(address _nextVaultLib)
  function symbol() view returns (string symbol_)
  function totalSupply() view returns (uint256)
  function transfer(address, uint256) returns (bool)
  function transferFrom(address, address, uint256) returns (bool)
  function transferShares(address _from, address _to, uint256 _amount)
  function withdrawAssetTo(address _asset, address _target, uint256 _amount)
`;
