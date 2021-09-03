/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICurveAddressProvider extends Contract<ICurveAddressProvider> {
  get_address: Call<(arg0: BigNumberish) => string, ICurveAddressProvider>
  get_registry: Call<() => string, ICurveAddressProvider>
}

let ICurveAddressProviderBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICurveAddressProviderBytecode = '0x';
}

// prettier-ignore
export const ICurveAddressProvider = contract<ICurveAddressProvider>(ICurveAddressProviderBytecode)`
  function get_address(uint256) view returns (address)
  function get_registry() view returns (address)
`;
