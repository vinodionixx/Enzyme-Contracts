/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IMigratableVault extends Contract<IMigratableVault> {
  canMigrate: Call<(_who: AddressLike) => boolean, IMigratableVault>
  init: Send<(_owner: AddressLike, _accessor: AddressLike, _fundName: string) => void, IMigratableVault>
  setAccessor: Send<(_nextAccessor: AddressLike) => void, IMigratableVault>
  setVaultLib: Send<(_nextVaultLib: AddressLike) => void, IMigratableVault>
}

let IMigratableVaultBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IMigratableVaultBytecode = '0x';
}

// prettier-ignore
export const IMigratableVault = contract<IMigratableVault>(IMigratableVaultBytecode)`
  function canMigrate(address _who) view returns (bool canMigrate_)
  function init(address _owner, address _accessor, string _fundName)
  function setAccessor(address _nextAccessor)
  function setVaultLib(address _nextVaultLib)
`;
