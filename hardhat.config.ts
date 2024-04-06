import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
    ],

    overrides: {
      "contracts/Coin.sol": {
        version: "0.8.20",
      },
    },
  },
};

export default config;
