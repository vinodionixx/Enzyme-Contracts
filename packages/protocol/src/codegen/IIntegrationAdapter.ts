/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IIntegrationAdapter extends Contract<IIntegrationAdapter> {
  identifier: Call<() => string, IIntegrationAdapter>
  parseAssetsForMethod: Call<(_selector: BytesLike, _encodedCallArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, IIntegrationAdapter>
}

let IIntegrationAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IIntegrationAdapterBytecode = '0x';
}

// prettier-ignore
export const IIntegrationAdapter = contract<IIntegrationAdapter>(IIntegrationAdapterBytecode)`
  function identifier() pure returns (string identifier_)
  function parseAssetsForMethod(bytes4 _selector, bytes _encodedCallArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
`;
