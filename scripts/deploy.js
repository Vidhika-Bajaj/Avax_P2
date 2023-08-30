
const hre = require("hardhat");

async function main() {
  const BankATM = await hre.ethers.getContractFactory("ATM");
  const bankatm = await BankATM.deploy();
  await bankatm.deployed();

  console.log(`A contract deployed to ${bankatm.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
