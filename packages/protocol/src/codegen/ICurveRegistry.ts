/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICurveRegistry extends Contract<ICurveRegistry> {
  get_gauges: Call<(arg0: AddressLike) => { '0': [string, string, string, string, string, string, string, string, string, string], '1': [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] }, ICurveRegistry>
  get_lp_token: Call<(arg0: AddressLike) => string, ICurveRegistry>
  get_pool_from_lp_token: Call<(arg0: AddressLike) => string, ICurveRegistry>
}

let ICurveRegistryBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICurveRegistryBytecode = '0x';
}

// prettier-ignore
export const ICurveRegistry = contract<ICurveRegistry>(ICurveRegistryBytecode)`
  function get_gauges(address) view returns (address[10], int128[10])
  function get_lp_token(address) view returns (address)
  function get_pool_from_lp_token(address) view returns (address)
`;
