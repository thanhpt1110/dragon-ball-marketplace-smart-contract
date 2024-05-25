import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({path: __dirname + '/.env'});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        fantomtest: {
            url: process.env.FANTOM_TESTNET_RPC,
            accounts: [`0x${process.env.PRIVATE_KEY}`]
        },
    },
    etherscan: {
        apiKey: process.env.FANTOMSCAN_API_KEY
    }
};
