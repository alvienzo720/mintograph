import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: process.env.INFURA_PROJECT_URL,
      chainId: 11155111, // Sepolia uses chainId 4
      accounts: ['process.env.PRIVATEKEY'],// Your private key
      gasPrice: 20000000000, // Optional: you can set a custom gas price
    },
  },
  solidity: "0.8.18",
};

export default config;
