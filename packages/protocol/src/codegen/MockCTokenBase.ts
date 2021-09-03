/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type MockCTokenBaseArgs = [
  _name: string,
  _symbol: string,
  _decimals: BigNumberish,
  _token: AddressLike,
  _centralizedRateProvider: AddressLike,
  _initialRate: BigNumberish,
];

// prettier-ignore
export interface MockCTokenBase extends Contract<MockCTokenBase> {
  ETH_ADDRESS: Call<() => string, MockCTokenBase>
  allowance: Call<(_owner: AddressLike, _spender: AddressLike) => BigNumber, MockCTokenBase>
  approve: Send<(_spender: AddressLike, _amount: BigNumberish) => boolean, MockCTokenBase>
  balanceOf: Call<(account: AddressLike) => BigNumber, MockCTokenBase>
  decimals: Call<() => BigNumber, MockCTokenBase>
  decreaseAllowance: Send<(spender: AddressLike, subtractedValue: BigNumberish) => boolean, MockCTokenBase>
  exchangeRateStored: Call<() => BigNumber, MockCTokenBase>
  getCentralizedRateProvider: Call<() => string, MockCTokenBase>
  increaseAllowance: Send<(spender: AddressLike, addedValue: BigNumberish) => boolean, MockCTokenBase>
  mintFor: Send<(_who: AddressLike, _amount: BigNumberish) => void, MockCTokenBase>
  name: Call<() => string, MockCTokenBase>
  owner: Call<() => string, MockCTokenBase>
  renounceOwnership: Send<() => void, MockCTokenBase>
  setRate: Send<(_rate: BigNumberish) => void, MockCTokenBase>
  symbol: Call<() => string, MockCTokenBase>
  totalSupply: Call<() => BigNumber, MockCTokenBase>
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, MockCTokenBase>
  transferFrom: Send<(_sender: AddressLike, _recipient: AddressLike, _amount: BigNumberish) => boolean, MockCTokenBase>
  transferOwnership: Send<(newOwner: AddressLike) => void, MockCTokenBase>
  underlying: Call<() => string, MockCTokenBase>
}

let MockCTokenBaseBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockCTokenBaseBytecode =
    '0x60c06040523480156200001157600080fd5b50604051620013a9380380620013a9833981810160405260c08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208281015191830151606084015160809094015188519396509094509187918791620001d29160039190850190620002a7565b508051620001e8906004906020840190620002a7565b50506005805460ff19166012179055506000620002046200028d565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620002658462000291565b6001600160601b0319606093841b81166080529190921b1660a0526006555062000343915050565b3390565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ea57805160ff19168380011785556200031a565b828001600101855582156200031a579182015b828111156200031a578251825591602001919060010190620002fd565b50620003289291506200032c565b5090565b5b808211156200032857600081556001016200032d565b60805160601c60a05160601c61103c6200036d60003980610a8d5250806106b1525061103c6000f3fe6080604052600436106101235760003560e01c8063715018a6116100a0578063a9059cbb11610064578063a9059cbb14610406578063da1919b31461043f578063dd62ed3e14610478578063f2fde38b146104b3578063fc3e06c9146104e65761012a565b8063715018a6146103795780638da5cb5b1461038e57806395d89b41146103a3578063a457c2d7146103b8578063a734f06e146103f15761012a565b8063313ce567116100e7578063313ce5671461028557806334fcf437146102b057806339509351146102dc5780636f307dc31461031557806370a08231146103465761012a565b806306fdde031461012f578063095ea7b3146101b957806318160ddd14610206578063182df0f51461022d57806323b872dd146102425761012a565b3661012a57005b600080fd5b34801561013b57600080fd5b506101446104fb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017e578181015183820152602001610166565b50505050905090810190601f1680156101ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c557600080fd5b506101f2600480360360408110156101dc57600080fd5b506001600160a01b038135169060200135610591565b604080519115158252519081900360200190f35b34801561021257600080fd5b5061021b6105c0565b60408051918252519081900360200190f35b34801561023957600080fd5b5061021b6105c6565b34801561024e57600080fd5b506101f26004803603606081101561026557600080fd5b506001600160a01b038135811691602081013590911690604001356105cc565b34801561029157600080fd5b5061029a6105e3565b6040805160ff9092168252519081900360200190f35b3480156102bc57600080fd5b506102da600480360360208110156102d357600080fd5b50356105ec565b005b3480156102e857600080fd5b506101f2600480360360408110156102ff57600080fd5b506001600160a01b038135169060200135610653565b34801561032157600080fd5b5061032a6106af565b604080516001600160a01b039092168252519081900360200190f35b34801561035257600080fd5b5061021b6004803603602081101561036957600080fd5b50356001600160a01b03166106d3565b34801561038557600080fd5b506102da6106ee565b34801561039a57600080fd5b5061032a6107a0565b3480156103af57600080fd5b506101446107b4565b3480156103c457600080fd5b506101f2600480360360408110156103db57600080fd5b506001600160a01b038135169060200135610815565b3480156103fd57600080fd5b5061032a61087d565b34801561041257600080fd5b506101f26004803603604081101561042957600080fd5b506001600160a01b038135169060200135610895565b34801561044b57600080fd5b506102da6004803603604081101561046257600080fd5b506001600160a01b0381351690602001356108a9565b34801561048457600080fd5b5061021b6004803603604081101561049b57600080fd5b506001600160a01b0381358116916020013516610919565b3480156104bf57600080fd5b506102da600480360360208110156104d657600080fd5b50356001600160a01b031661097d565b3480156104f257600080fd5b5061032a610a8b565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105875780601f1061055c57610100808354040283529160200191610587565b820191906000526020600020905b81548152906001019060200180831161056a57829003601f168201915b5050505050905090565b3360009081526007602090815260408083206001600160a01b0386168452909152902081905560015b92915050565b60025490565b60065490565b60006105d9848484610aaf565b5060019392505050565b60055460ff1690565b6105f4610c0a565b6001600160a01b03166106056107a0565b6001600160a01b03161461064e576040805162461bcd60e51b81526020600482018190526024820152600080516020610f79833981519152604482015290519081900360640190fd5b600655565b60006106a6610660610c0a565b846106a18560016000610671610c0a565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610c0e565b610c6f565b50600192915050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b031660009081526020819052604090205490565b6106f6610c0a565b6001600160a01b03166107076107a0565b6001600160a01b031614610750576040805162461bcd60e51b81526020600482018190526024820152600080516020610f79833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105875780601f1061055c57610100808354040283529160200191610587565b60006106a6610822610c0a565b846106a185604051806060016040528060258152602001610fe2602591396001600061084c610c0a565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610d5b565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b60006106a66108a2610c0a565b8484610aaf565b6108b1610c0a565b6001600160a01b03166108c26107a0565b6001600160a01b03161461090b576040805162461bcd60e51b81526020600482018190526024820152600080516020610f79833981519152604482015290519081900360640190fd5b6109158282610df2565b5050565b60006001600160a01b0382163014806109435750816001600160a01b0316836001600160a01b0316145b1561095157506000196105ba565b506001600160a01b038083166000908152600760209081526040808320938516835292905220546105ba565b610985610c0a565b6001600160a01b03166109966107a0565b6001600160a01b0316146109df576040805162461bcd60e51b81526020600482018190526024820152600080516020610f79833981519152604482015290519081900360640190fd5b6001600160a01b038116610a245760405162461bcd60e51b8152600401808060200182810382526026815260200180610f0b6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b038316610af45760405162461bcd60e51b8152600401808060200182810382526025815260200180610f996025913960400191505060405180910390fd5b6001600160a01b038216610b395760405162461bcd60e51b8152600401808060200182810382526023815260200180610ee86023913960400191505060405180910390fd5b610b44838383610ee2565b610b8181604051806060016040528060268152602001610f53602691396001600160a01b0386166000908152602081905260409020549190610d5b565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610bb09082610c0e565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b3390565b600082820183811015610c68576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038316610cb45760405162461bcd60e51b8152600401808060200182810382526024815260200180610fbe6024913960400191505060405180910390fd5b6001600160a01b038216610cf95760405162461bcd60e51b8152600401808060200182810382526022815260200180610f316022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60008184841115610dea5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610daf578181015183820152602001610d97565b50505050905090810190601f168015610ddc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610e4d576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610e5960008383610ee2565b600254610e669082610c0e565b6002556001600160a01b038216600090815260208190526040902054610e8c9082610c0e565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122024a4d33bed29c599ba1b9c8bd56279954daa741f011b4e95e12a8af56d04c44c64736f6c634300060c0033';
}

// prettier-ignore
export const MockCTokenBase = contract<MockCTokenBase, MockCTokenBaseArgs>(MockCTokenBaseBytecode)`
  constructor(string _name, string _symbol, uint8 _decimals, address _token, address _centralizedRateProvider, uint256 _initialRate)
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
  event Transfer(address indexed from, address indexed to, uint256 value)
  function ETH_ADDRESS() view returns (address)
  function allowance(address _owner, address _spender) view returns (uint256)
  function approve(address _spender, uint256 _amount) returns (bool)
  function balanceOf(address account) view returns (uint256)
  function decimals() view returns (uint8)
  function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)
  function exchangeRateStored() view returns (uint256)
  function getCentralizedRateProvider() view returns (address)
  function increaseAllowance(address spender, uint256 addedValue) returns (bool)
  function mintFor(address _who, uint256 _amount)
  function name() view returns (string)
  function owner() view returns (address)
  function renounceOwnership()
  function setRate(uint256 _rate)
  function symbol() view returns (string)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address _sender, address _recipient, uint256 _amount) returns (bool)
  function transferOwnership(address newOwner)
  function underlying() view returns (address)
`;
