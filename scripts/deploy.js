require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const provider = ethers.provider;
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await provider.getBalance(deployer.address)).toString());

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    if (token.deployTransaction) {
        console.log("Deployment transaction:", token.deployTransaction);

        try {
            await token.deployTransaction.wait();
            console.log("Token address:", token.address);
        } catch (error) {
            console.error("Error waiting for deployment transaction:", error);
        }
    } else {
        console.error("Error deploying contract: deployTransaction is undefined");
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
