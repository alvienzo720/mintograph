import { ethers } from "hardhat";

async function main() {
  const SimpleNFT = await ethers.getContractFactory('SimpleNFT');
  const simpleNFT = await SimpleNFT.deploy('0xC2418f0A32ff21Ff4f6D688D3fEe493B5417648a');
  console.log("Contract Deployed to: ", simpleNFT.getAddress());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
