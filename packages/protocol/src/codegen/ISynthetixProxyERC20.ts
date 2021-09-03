/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface ISynthetixProxyERC20 extends Contract<ISynthetixProxyERC20> {
  target: Call<() => string, ISynthetixProxyERC20>
}

let ISynthetixProxyERC20Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ISynthetixProxyERC20Bytecode = '0x';
}

// prettier-ignore
export const ISynthetixProxyERC20 = contract<ISynthetixProxyERC20>(ISynthetixProxyERC20Bytecode)`
  function target() view returns (address)
`;
