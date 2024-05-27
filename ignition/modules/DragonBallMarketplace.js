const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

console.log(buildModule);
module.exports = buildModule("DragonBallMarketplaceModule", (m) => {
    const token = m.contract("DragonBallMarketplace", ["0xA4Dc615a9573337B9e2c6feC8D45AF9F48F461e2"]);
    return { token };
});
