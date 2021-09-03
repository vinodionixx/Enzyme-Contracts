import { ChainlinkPriceFeedArgs } from '@enzymefinance/protocol';
import { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../../utils/config';

const fn: DeployFunction = async function (hre) {
  try {
    
  
  const {
    deployments: { deploy, get },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const config = await loadConfig(hre);
  const fundDeployer = await get('FundDeployer');

  const assets = Object.keys(config.primitives).map((key) => {
    if (!config.chainlink.aggregators[key]) {
      throw new Error(`Missing aggregator for ${key}`);
    }

    const aggregator = config.chainlink.aggregators[key];
    const primitive = config.primitives[key];
    return [primitive, ...aggregator] as const;
  });

  const primitives = assets.map(([primitive]) => primitive);
  const aggregators = assets.map(([, aggregator]) => aggregator);
  const rateAssets = assets.map(([, , rateAsset]) => rateAsset);

  await deploy('ChainlinkPriceFeed', {
    args: [
      fundDeployer.address,
      config.weth,
      config.chainlink.ethusd,
      primitives,
      aggregators,
      rateAssets,
    ] as ChainlinkPriceFeedArgs,
    from: deployer.address,
    log: true,
    skipIfAlreadyDeployed: true,
  });

} catch (error) {
    console.log(error)
}
};

fn.tags = ['Release', 'ChainlinkPriceFeed'];
fn.dependencies = ['Config', 'FundDeployer'];

export default fn;
