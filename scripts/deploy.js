const hre = require("hardhat");

async function main() {
  const initialSupply = 1000000; 

  console.log("Iniciando o deploy da Carlos Coin...");
  
  const CarlosCoin = await hre.ethers.getContractFactory("CarlosCoin");
  const carlosCoin = await CarlosCoin.deploy(initialSupply);

  await carlosCoin.waitForDeployment();

  console.log(`Carlos Coin publicada com sucesso no endereço: ${await carlosCoin.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
