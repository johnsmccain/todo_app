import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.INFURA_API_KEY, process.env.SEPOLIA_PRIVATE_KEY);
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.SEPOLIA_PRIVATE_KEY}`],
  }}
};

export default config;
