import { DeployFunction } from 'hardhat-deploy/types';

const fn: DeployFunction = async function ({ deployments: { deploy }, ethers: { getSigners } }) {
  const deployer = (await getSigners())[0];
console.log(deployer)
  await deploy('Dispatcher', {
   // from: deployer ? deployer.address : '0x00905094f10748d0DfAF7Dc513Ef6Fa4DDCD1452',
    from: deployer.address,
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

fn.tags = ['Persistent', 'Dispatcher'];

export default fn;
