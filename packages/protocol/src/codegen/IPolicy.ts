/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IPolicy extends Contract<IPolicy> {
  activateForFund: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike) => void, IPolicy>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _encodedSettings: BytesLike) => void, IPolicy>
  identifier: Call<() => string, IPolicy>
  implementedHooks: Call<() => BigNumber[], IPolicy>
  updateFundSettings: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, _encodedSettings: BytesLike) => void, IPolicy>
  validateRule: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, _hook: BigNumberish, _encodedArgs: BytesLike) => boolean, IPolicy>
}

let IPolicyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IPolicyBytecode = '0x';
}

// prettier-ignore
export const IPolicy = contract<IPolicy>(IPolicyBytecode)`
  function activateForFund(address _comptrollerProxy, address _vaultProxy)
  function addFundSettings(address _comptrollerProxy, bytes _encodedSettings)
  function identifier() pure returns (string identifier_)
  function implementedHooks() view returns (uint8[] implementedHooks_)
  function updateFundSettings(address _comptrollerProxy, address _vaultProxy, bytes _encodedSettings)
  function validateRule(address _comptrollerProxy, address _vaultProxy, uint8 _hook, bytes _encodedArgs) returns (bool isValid_)
`;
