/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface MockReentrancyToken extends Contract<MockReentrancyToken> {
  addMinters: Send<(_minters: AddressLike[]) => void, MockReentrancyToken>
  allowance: Call<(owner: AddressLike, spender: AddressLike) => BigNumber, MockReentrancyToken>
  approve: Send<(spender: AddressLike, amount: BigNumberish) => boolean, MockReentrancyToken>
  bad: Call<() => boolean, MockReentrancyToken>
  balanceOf: Call<(account: AddressLike) => BigNumber, MockReentrancyToken>
  burn: Send<(amount: BigNumberish) => void, MockReentrancyToken>
  burnFrom: Send<(account: AddressLike, amount: BigNumberish) => void, MockReentrancyToken>
  comptrollerProxy: Call<() => string, MockReentrancyToken>
  decimals: Call<() => BigNumber, MockReentrancyToken>
  decreaseAllowance: Send<(spender: AddressLike, subtractedValue: BigNumberish) => boolean, MockReentrancyToken>
  increaseAllowance: Send<(spender: AddressLike, addedValue: BigNumberish) => boolean, MockReentrancyToken>
  makeItReentracyToken: Send<(_comptrollerProxy: AddressLike) => void, MockReentrancyToken>
  mint: Send<(_amount: BigNumberish) => void, MockReentrancyToken>
  mintFor: Send<(_who: AddressLike, _amount: BigNumberish) => void, MockReentrancyToken>
  name: Call<() => string, MockReentrancyToken>
  owner: Call<() => string, MockReentrancyToken>
  renounceOwnership: Send<() => void, MockReentrancyToken>
  symbol: Call<() => string, MockReentrancyToken>
  totalSupply: Call<() => BigNumber, MockReentrancyToken>
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, MockReentrancyToken>
  transferFrom: Send<(sender: AddressLike, recipient: AddressLike, amount: BigNumberish) => boolean, MockReentrancyToken>
  transferOwnership: Send<(newOwner: AddressLike) => void, MockReentrancyToken>
}

let MockReentrancyTokenBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockReentrancyTokenBytecode =
    '0x60806040523480156200001157600080fd5b506040518060400160405280601581526020017f4d6f636b205265656e7472616e637920546f6b656e00000000000000000000008152506040518060400160405280600381526020016213549560ea1b815250601282828160039080519060200190620000809291906200033b565b508051620000969060049060208401906200033b565b50506005805460ff19166012179055506000620000b26200014b565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000113816200014f565b62000142336200013c8360ff16600a0a6305f5e1006200016560201b62000fb11790919060201c565b620001cc565b505050620003d7565b3390565b6005805460ff191660ff92909216919091179055565b6000826200017657506000620001c6565b828202828482816200018457fe5b0414620001c35760405162461bcd60e51b815260040180806020018281038252602181526020018062001b5b6021913960400191505060405180910390fd5b90505b92915050565b6001600160a01b03821662000228576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200023660008383620002db565b6200025281600254620002e060201b620010111790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200028591839062001011620002e0821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620001c3576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200037e57805160ff1916838001178555620003ae565b82800160010185558215620003ae579182015b82811115620003ae57825182559160200191906001019062000391565b50620003bc929150620003c0565b5090565b5b80821115620003bc5760008155600101620003c1565b61177480620003e76000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806371e2a657116100b8578063a0712d681161007c578063a0712d681461041a578063a457c2d714610437578063a9059cbb14610463578063da1919b31461048f578063dd62ed3e146104bb578063f2fde38b146104e957610142565b806371e2a6571461033557806379cc6790146103d65780638da5cb5b1461040257806395d89b411461040a5780639c3674fc1461041257610142565b8063395093511161010a578063395093511461027257806342966c681461029e578063430cf151146102bd5780634cbfb08a146102e357806370a0823114610307578063715018a61461032d57610142565b806306fdde0314610147578063095ea7b3146101c457806318160ddd1461020457806323b872dd1461021e578063313ce56714610254575b600080fd5b61014f61050f565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b0381351690602001356105a5565b604080519115158252519081900360200190f35b61020c6105c3565b60408051918252519081900360200190f35b6101f06004803603606081101561023457600080fd5b506001600160a01b038135811691602081013590911690604001356105c9565b61025c610819565b6040805160ff9092168252519081900360200190f35b6101f06004803603604081101561028857600080fd5b506001600160a01b038135169060200135610822565b6102bb600480360360208110156102b457600080fd5b5035610875565b005b6102bb600480360360208110156102d357600080fd5b50356001600160a01b0316610889565b6102eb6108bb565b604080516001600160a01b039092168252519081900360200190f35b61020c6004803603602081101561031d57600080fd5b50356001600160a01b03166108cf565b6102bb6108ea565b6102bb6004803603602081101561034b57600080fd5b810190602081018135600160201b81111561036557600080fd5b82018360208201111561037757600080fd5b803590602001918460208302840111600160201b8311171561039857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506109ae945050505050565b6102bb600480360360408110156103ec57600080fd5b506001600160a01b038135169060200135610a7e565b6102eb610ad8565b61014f610aec565b6101f0610b4d565b6102bb6004803603602081101561043057600080fd5b5035610b56565b6101f06004803603604081101561044d57600080fd5b506001600160a01b038135169060200135610bc8565b6101f06004803603604081101561047957600080fd5b506001600160a01b038135169060200135610c30565b6102bb600480360360408110156104a557600080fd5b506001600160a01b038135169060200135610df4565b61020c600480360360408110156104d157600080fd5b506001600160a01b0381358116916020013516610e66565b6102bb600480360360208110156104ff57600080fd5b50356001600160a01b0316610e91565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561059b5780601f106105705761010080835404028352916020019161059b565b820191906000526020600020905b81548152906001019060200180831161057e57829003601f168201915b5050505050905090565b60006105b96105b261106b565b848461106f565b5060015b92915050565b60025490565b60075460009060ff16156108045760075461010090046001600160a01b031663f9f585dd6000604051908082528060200260200182016040528015610618578160200160208202803683370190505b506040805160008082526020808301828152838501948590526001600160e01b031960e088901b16909452606060448401908152855160a48501528551939493909283926064870192608488019260c48901928a81019202908190849084905b83811015610690578181015183820152602001610678565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156106cf5781810151838201526020016106b7565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561070e5781810151838201526020016106f6565b505050509050019650505050505050600060405180830381600087803b15801561073757600080fd5b505af115801561074b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561077457600080fd5b8101908080516040519392919084600160201b82111561079357600080fd5b9083019060208201858111156107a857600080fd5b82518660208202830111600160201b821117156107c457600080fd5b82525081516020918201928201910280838360005b838110156107f15781810151838201526020016107d9565b505050509050016040525050505061080f565b61080f84848461115b565b5060019392505050565b60055460ff1690565b60006105b961082f61106b565b84610870856001600061084061106b565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611011565b61106f565b61088661088061106b565b826112b6565b50565b600780546001600160a01b0390921661010002610100600160a81b031960ff1990931660011792909216919091179055565b60075461010090046001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6108f261106b565b6001600160a01b0316610903610ad8565b6001600160a01b03161461095e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b6109b661106b565b6001600160a01b03166109c7610ad8565b6001600160a01b031614610a22576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60005b8151811015610a7a57600160066000848481518110610a4057fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610a25565b5050565b6000610ab58260405180606001604052806024815260200161166b60249139610aae86610aa961106b565b610e66565b91906113b2565b9050610ac983610ac361106b565b8361106f565b610ad383836112b6565b505050565b60055461010090046001600160a01b031690565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561059b5780601f106105705761010080835404028352916020019161059b565b60075460ff1681565b3360009081526006602052604090205460ff1680610b83575033610b78610ad8565b6001600160a01b0316145b610bbe5760405162461bcd60e51b81526004018080602001828103825260218152602001806116f96021913960400191505060405180910390fd5b6108863382611449565b60006105b9610bd561106b565b846108708560405180606001604052806025815260200161171a6025913960016000610bff61106b565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906113b2565b60075460009060ff1615610de257600760019054906101000a90046001600160a01b03166001600160a01b031663b460481d6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c8e57600080fd5b505af1158015610ca2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040908152811015610ccb57600080fd5b8101908080516040519392919084600160201b821115610cea57600080fd5b908301906020820185811115610cff57600080fd5b82518660208202830111600160201b82111715610d1b57600080fd5b82525081516020918201928201910280838360005b83811015610d48578181015183820152602001610d30565b5050505090500160405260200180516040519392919084600160201b821115610d7057600080fd5b908301906020820185811115610d8557600080fd5b82518660208202830111600160201b82111715610da157600080fd5b82525081516020918201928201910280838360005b83811015610dce578181015183820152602001610db6565b5050505090500160405250505050506105b9565b6105b9610ded61106b565b848461115b565b3360009081526006602052604090205460ff1680610e21575033610e16610ad8565b6001600160a01b0316145b610e5c5760405162461bcd60e51b81526004018080602001828103825260218152602001806116f96021913960400191505060405180910390fd5b610a7a8282611449565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610e9961106b565b6001600160a01b0316610eaa610ad8565b6001600160a01b031614610f05576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610f4a5760405162461bcd60e51b81526004018080602001828103825260268152602001806115dc6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600082610fc0575060006105bd565b82820282848281610fcd57fe5b041461100a5760405162461bcd60e51b815260040180806020018281038252602181526020018061164a6021913960400191505060405180910390fd5b9392505050565b60008282018381101561100a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b6001600160a01b0383166110b45760405162461bcd60e51b81526004018080602001828103825260248152602001806116d56024913960400191505060405180910390fd5b6001600160a01b0382166110f95760405162461bcd60e51b81526004018080602001828103825260228152602001806116026022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166111a05760405162461bcd60e51b81526004018080602001828103825260258152602001806116b06025913960400191505060405180910390fd5b6001600160a01b0382166111e55760405162461bcd60e51b81526004018080602001828103825260238152602001806115976023913960400191505060405180910390fd5b6111f0838383610ad3565b61122d81604051806060016040528060268152602001611624602691396001600160a01b03861660009081526020819052604090205491906113b2565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461125c9082611011565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6001600160a01b0382166112fb5760405162461bcd60e51b815260040180806020018281038252602181526020018061168f6021913960400191505060405180910390fd5b61130782600083610ad3565b611344816040518060600160405280602281526020016115ba602291396001600160a01b03851660009081526020819052604090205491906113b2565b6001600160a01b03831660009081526020819052604090205560025461136a9082611539565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600081848411156114415760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114065781810151838201526020016113ee565b50505050905090810190601f1680156114335780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0382166114a4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6114b060008383610ad3565b6002546114bd9082611011565b6002556001600160a01b0382166000908152602081905260409020546114e39082611011565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082821115611590576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573736d73672e73656e646572206973206e6f74206f776e6572206f72206d696e74657245524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b6aa8a79565172b5a6b15ab51d3ee3f5195a09bc258f1e739c3cef82cfe0fec864736f6c634300060c0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77';
}

// prettier-ignore
export const MockReentrancyToken = contract<MockReentrancyToken>(MockReentrancyTokenBytecode)`
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
  event Transfer(address indexed from, address indexed to, uint256 value)
  function addMinters(address[] _minters)
  function allowance(address owner, address spender) view returns (uint256)
  function approve(address spender, uint256 amount) returns (bool)
  function bad() view returns (bool)
  function balanceOf(address account) view returns (uint256)
  function burn(uint256 amount)
  function burnFrom(address account, uint256 amount)
  function comptrollerProxy() view returns (address)
  function decimals() view returns (uint8)
  function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)
  function increaseAllowance(address spender, uint256 addedValue) returns (bool)
  function makeItReentracyToken(address _comptrollerProxy)
  function mint(uint256 _amount)
  function mintFor(address _who, uint256 _amount)
  function name() view returns (string)
  function owner() view returns (address)
  function renounceOwnership()
  function symbol() view returns (string)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
  function transferOwnership(address newOwner)
`;
