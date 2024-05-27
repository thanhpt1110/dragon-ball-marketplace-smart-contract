const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

console.log(buildModule);
module.exports = buildModule("DragonBallMarketplaceModule", (m) => {
    const token = m.contract("DragonBallMarketplace", ["0x8a83188639d9c049e9DeCA2abDbE32F2c4D2B3d6"]);
    return { token };
});
