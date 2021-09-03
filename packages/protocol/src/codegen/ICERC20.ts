/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ICERC20 extends Contract<ICERC20> {
  allowance: Call<(owner: AddressLike, spender: AddressLike) => BigNumber, ICERC20>
  approve: Send<(spender: AddressLike, amount: BigNumberish) => boolean, ICERC20>
  balanceOf: Call<(account: AddressLike) => BigNumber, ICERC20>
  decimals: Call<() => BigNumber, ICERC20>
  exchangeRateStored: Call<() => BigNumber, ICERC20>
  mint: Send<(arg0: BigNumberish) => BigNumber, ICERC20>
  redeem: Send<(arg0: BigNumberish) => BigNumber, ICERC20>
  totalSupply: Call<() => BigNumber, ICERC20>
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, ICERC20>
  transferFrom: Send<(sender: AddressLike, recipient: AddressLike, amount: BigNumberish) => boolean, ICERC20>
  underlying: Send<() => string, ICERC20>
}

let ICERC20Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ICERC20Bytecode = '0x';
}

// prettier-ignore
export const ICERC20 = contract<ICERC20>(ICERC20Bytecode)`
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event Transfer(address indexed from, address indexed to, uint256 value)
  function allowance(address owner, address spender) view returns (uint256)
  function approve(address spender, uint256 amount) returns (bool)
  function balanceOf(address account) view returns (uint256)
  function decimals() view returns (uint8)
  function exchangeRateStored() view returns (uint256)
  function mint(uint256) returns (uint256)
  function redeem(uint256) returns (uint256)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
  function underlying() returns (address)
`;
