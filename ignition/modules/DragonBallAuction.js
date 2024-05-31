const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

console.log(buildModule);
module.exports = buildModule("DragonBallAuctionModule", (m) => {
    const token = m.contract("DragonBallAuction", ["0x91492af02b75a1da8B3677f167f1c9AbE7Faf7A8"]);
    return { token };
});
