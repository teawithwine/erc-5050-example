const { ethers, run } = require('hardhat');

const { resolve } = require('path');
const { config: dotenvConfig  } = require('dotenv');

dotenvConfig({ path: resolve(__dirname, './.env') });

const main = async () => {
  await run('compile');

  const ContractFactory = await ethers.getContractFactory('ERC5050');
  const contract = await ContractFactory.deploy(process.env.CONTRACT_NAME, process.env.CONTRACT_SYMBOL);
  await contract.deployed();

  console.log('Deployed to address:', contract.address);
}

// Hardhat recommends this pattern to be able to use async/await everywhere and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
