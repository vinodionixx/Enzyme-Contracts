import {
  AaveAdapter,
  aaveLendArgs,
  aaveRedeemArgs,
  lendSelector,
  redeemSelector,
  SpendAssetsHandleType,
  StandardToken,
} from '@enzymefinance/protocol';
import { createNewFund, ProtocolDeployment, getAssetBalances, deployProtocolFixture } from '@enzymefinance/testutils';
import { aaveLend, aaveRedeem } from '@enzymefinance/testutils/src/scaffolding/extensions/integrations/aave';
import { BigNumber, utils } from 'ethers';

let fork: ProtocolDeployment;
beforeEach(async () => {
  fork = await deployProtocolFixture();
});

// HAPPY PATHS
describe('lend', () => {
  it('works as expected when called for lending by a fund', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer: fork.deployment.fundDeployer,
      denominationAsset: new StandardToken(fork.config.weth, fundOwner),
    });

    const token = new StandardToken(fork.config.primitives.usdc, whales.usdc);
    const amount = utils.parseUnits('1', await token.decimals());
    const aToken = new StandardToken(fork.config.aave.atokens.ausdc[0], whales.ausdc);

    await token.transfer(vaultProxy, amount);

    const [preTxIncomingAssetBalance, preTxOutgoingAssetBalance] = await getAssetBalances({
      account: vaultProxy,
      assets: [aToken, token],
    });

    const lendReceipt = await aaveLend({
      comptrollerProxy,
      integrationManager: fork.deployment.integrationManager,
      fundOwner,
      aaveAdapter: fork.deployment.aaveAdapter,
      aToken,
      amount,
    });

    const [postTxIncomingAssetBalance, postTxOutgoingAssetBalance] = await getAssetBalances({
      account: vaultProxy,
      assets: [aToken, token],
    });

    expect(postTxIncomingAssetBalance).toEqBigNumber(preTxIncomingAssetBalance.add(amount));
    expect(postTxOutgoingAssetBalance).toEqBigNumber(preTxOutgoingAssetBalance.sub(amount));

    // Rounding up from 540942
    expect(lendReceipt).toCostLessThan('542000');
  });
});

describe('redeem', () => {
  it('works as expected when called for redeem by a fund', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer: fork.deployment.fundDeployer,
      denominationAsset: new StandardToken(fork.config.weth, fundOwner),
    });

    const aToken = new StandardToken(fork.config.aave.atokens.ausdc[0], whales.ausdc);
    const amount = utils.parseUnits('1', await aToken.decimals());
    const token = new StandardToken(fork.config.primitives.usdc, provider);

    await aToken.transfer(vaultProxy, amount);

    const [preTxIncomingAssetBalance, preTxOutgoingAssetBalance] = await getAssetBalances({
      account: vaultProxy,
      assets: [token, aToken],
    });

    const redeemReceipt = await aaveRedeem({
      comptrollerProxy,
      integrationManager: fork.deployment.integrationManager,
      fundOwner,
      aaveAdapter: fork.deployment.aaveAdapter,
      aToken,
      amount,
    });

    const [postTxIncomingAssetBalance, postTxOutgoingAssetBalance] = await getAssetBalances({
      account: vaultProxy,
      assets: [token, aToken],
    });

    expect(postTxIncomingAssetBalance).toEqBigNumber(preTxIncomingAssetBalance.add(amount));
    expect(postTxOutgoingAssetBalance).toEqBigNumber(preTxOutgoingAssetBalance.sub(amount));

    // Rounding up from 636286
    expect(redeemReceipt).toCostLessThan('637000');
  });
});

// TODO: Move this assertions to unit tests
describe('constructor', () => {
  it('sets state vars', async () => {
    const aaveAdapter = new AaveAdapter(fork.deployment.aaveAdapter, provider);
    const lendingPoolAddressProvider = await aaveAdapter.getLendingPoolAddressProvider();
    expect(lendingPoolAddressProvider).toMatchAddress(fork.config.aave.lendingPoolAddressProvider);

    const referralCode = await aaveAdapter.getReferralCode();
    expect(referralCode).toEqBigNumber(BigNumber.from('158'));
  });
});

describe('parseAssetsForMethod', () => {
  it('does not allow a bad selector', async () => {
    const aaveAdapter = new AaveAdapter(fork.deployment.aaveAdapter, provider);
    const outgoingToken = new StandardToken(fork.config.primitives.usdc, whales.usdc);
    const amount = utils.parseUnits('1', await outgoingToken.decimals());
    const aToken = new StandardToken(fork.config.aave.atokens.ausdc[0], whales.ausdc);

    const args = aaveLendArgs({
      aToken,
      amount,
    });

    await expect(aaveAdapter.parseAssetsForMethod(utils.randomBytes(4), args)).rejects.toBeRevertedWith(
      '_selector invalid',
    );

    await expect(aaveAdapter.parseAssetsForMethod(lendSelector, args)).resolves.toBeTruthy();
  });

  it('generates expected output for lending', async () => {
    const aaveAdapter = new AaveAdapter(fork.deployment.aaveAdapter, provider);
    const outgoingToken = new StandardToken(fork.config.primitives.usdc, whales.usdc);
    const amount = utils.parseUnits('1', await outgoingToken.decimals());
    const aToken = new StandardToken(fork.config.aave.atokens.ausdc[0], whales.ausdc);

    const args = aaveLendArgs({
      aToken,
      amount,
    });

    await expect(aaveAdapter.parseAssetsForMethod(utils.randomBytes(4), args)).rejects.toBeRevertedWith(
      '_selector invalid',
    );

    const result = await aaveAdapter.parseAssetsForMethod(lendSelector, args);

    expect(result).toMatchFunctionOutput(aaveAdapter.parseAssetsForMethod, {
      spendAssetsHandleType_: SpendAssetsHandleType.Transfer,
      incomingAssets_: [aToken.address],
      spendAssets_: [outgoingToken],
      spendAssetAmounts_: [amount],
      minIncomingAssetAmounts_: [amount],
    });
  });

  it('generates expected output for redeeming', async () => {
    const aaveAdapter = new AaveAdapter(fork.deployment.aaveAdapter, provider);
    const aToken = new StandardToken(fork.config.aave.atokens.ausdc[0], whales.ausdc);
    const amount = utils.parseUnits('1', await aToken.decimals());
    const token = new StandardToken(fork.config.primitives.usdc, provider);

    const args = aaveRedeemArgs({
      aToken,
      amount,
    });

    const result = await aaveAdapter.parseAssetsForMethod(redeemSelector, args);

    expect(result).toMatchFunctionOutput(aaveAdapter.parseAssetsForMethod, {
      spendAssetsHandleType_: SpendAssetsHandleType.Transfer,
      incomingAssets_: [token],
      spendAssets_: [aToken],
      spendAssetAmounts_: [amount],
      minIncomingAssetAmounts_: [amount],
    });
  });
});
