const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

console.log(buildModule);
module.exports = buildModule("TokenModule", (m) => {
    const token = m.contract("Token");

    return { token };
});
