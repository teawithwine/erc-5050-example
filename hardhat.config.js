require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');

const { resolve } = require('path');
const { config: dotenvConfig  } = require('dotenv');

dotenvConfig({ path: resolve(__dirname, './.env') });

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
};
