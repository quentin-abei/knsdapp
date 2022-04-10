const main = async () => {
  const MyContract = await ethers.getContractFactory("Domains");
const contract = await MyContract.attach(
  "0xed5EF79e8fb48a8cd4D4295c687adE89E8106f33" // The deployed contract address
);

// Now you can call functions of the contract
await contract.withdraw();

 
  
  
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();