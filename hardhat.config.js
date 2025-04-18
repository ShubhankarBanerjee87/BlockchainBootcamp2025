require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  ignition: {
    requiredConfirmations: 1
  },
  networks: {
    amoy : {
      url : process.env.RPC_URL,
      accounts : [process.env.PRIVATE_KEY]
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,

    sourcify: {
      enabled: true
    },
  }
}
