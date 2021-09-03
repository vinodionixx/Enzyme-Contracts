/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IIdleTokenV4 extends Contract<IIdleTokenV4> {
  getGovTokensAmounts: Call<(arg0: AddressLike) => BigNumber[], IIdleTokenV4>
  govTokens: Call<(arg0: BigNumberish) => string, IIdleTokenV4>
  mintIdleToken: Send<(arg0: BigNumberish, arg1: boolean, arg2: AddressLike) => BigNumber, IIdleTokenV4>
  redeemIdleToken: Send<(arg0: BigNumberish) => BigNumber, IIdleTokenV4>
  token: Call<() => string, IIdleTokenV4>
  tokenPrice: Call<() => BigNumber, IIdleTokenV4>
}

let IIdleTokenV4Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IIdleTokenV4Bytecode = '0x';
}

// prettier-ignore
export const IIdleTokenV4 = contract<IIdleTokenV4>(IIdleTokenV4Bytecode)`
  function getGovTokensAmounts(address) view returns (uint256[])
  function govTokens(uint256) view returns (address)
  function mintIdleToken(uint256, bool, address) returns (uint256)
  function redeemIdleToken(uint256) returns (uint256)
  function token() view returns (address)
  function tokenPrice() view returns (uint256)
`;
