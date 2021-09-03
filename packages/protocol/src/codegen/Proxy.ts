/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ProxyArgs = [_constructData: BytesLike, _contractLogic: AddressLike];

// prettier-ignore
export interface Proxy extends Contract<Proxy> {
  // No external functions
}

let ProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ProxyBytecode =
    '0x608060405234801561001057600080fd5b506040516102dd3803806102dd8339818101604052604081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190505050807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5560006060826001600160a01b0316846040518082805190602001908083835b602083106101515780518252601f199092019160209182019101610132565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101b1576040519150601f19603f3d011682016040523d82523d6000602084013e6101b6565b606091505b50915091508181906102465760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561020b5781810151838201526020016101f3565b50505050905090810190601f1680156102385780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050506084806102596000396000f3fe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc543660008037600080366000846127105a03f43d806000803e818015604957816000f35b816000fdfea2646970667358221220a1803ac6ce0ffe2a67dec9277d12dfb6cd5726f6e0058a715379be7dbea8435164736f6c634300060c0033';
}

// prettier-ignore
export const Proxy = contract<Proxy, ProxyArgs>(ProxyBytecode)`
  constructor(bytes _constructData, address _contractLogic)
`;