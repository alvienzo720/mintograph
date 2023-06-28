import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: process.env.INFURA_PROJECT_URL,
      chainId: 4, // Sepolia uses chainId 4
      accounts: ['process.env.PRIVATE_KEY'], // Your private key
      gasPrice: 20000000000, // Optional: you can set a custom gas price
    },
  },
  solidity: "0.8.18",
};

export default config;
