import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  const VALUE_LOCKED = hre.ethers.parseEther("0.00001");
  const UNLOCKED_TIME = 10000;

  const blockNumber = await hre.ethers.provider.getBlockNumber();
  const lastBlockTimestamp = (await hre.ethers.provider.getBlock(blockNumber))
    ?.timestamp as number;

  await deploy("Lock", {
    from: deployer,
    args: [lastBlockTimestamp + UNLOCKED_TIME],
    value: VALUE_LOCKED.toString(),
  });
};

func.tags = ["DeployAll", "Lock"];

export default func;
