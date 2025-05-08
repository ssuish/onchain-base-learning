import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    base_sepolia: {
      url: process.env.BASE_SEPOLIA_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC ?? "",
      }
    }
  }
};

export default config;
