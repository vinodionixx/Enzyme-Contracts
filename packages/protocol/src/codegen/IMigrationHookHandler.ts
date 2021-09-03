/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IMigrationHookHandler extends Contract<IMigrationHookHandler> {
  invokeMigrationInCancelHook: Send<(_vaultProxy: AddressLike, _prevFundDeployer: AddressLike, _nextVaultAccessor: AddressLike, _nextVaultLib: AddressLike) => void, IMigrationHookHandler>
  invokeMigrationOutHook: Send<(_hook: BigNumberish, _vaultProxy: AddressLike, _nextFundDeployer: AddressLike, _nextVaultAccessor: AddressLike, _nextVaultLib: AddressLike) => void, IMigrationHookHandler>
}

let IMigrationHookHandlerBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IMigrationHookHandlerBytecode = '0x';
}

// prettier-ignore
export const IMigrationHookHandler = contract<IMigrationHookHandler>(IMigrationHookHandlerBytecode)`
  function invokeMigrationInCancelHook(address _vaultProxy, address _prevFundDeployer, address _nextVaultAccessor, address _nextVaultLib)
  function invokeMigrationOutHook(uint8 _hook, address _vaultProxy, address _nextFundDeployer, address _nextVaultAccessor, address _nextVaultLib)
`;
