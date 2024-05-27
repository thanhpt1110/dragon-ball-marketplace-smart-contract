const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

console.log(buildModule);
module.exports = buildModule("DragonBallModule", (m) => {
    const token = m.contract("DragonBall");
    return { token };
});
