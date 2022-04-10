require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
		testnet: {
      chainId: 322,
      url: process.env.KCC_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
		}
  }
};
