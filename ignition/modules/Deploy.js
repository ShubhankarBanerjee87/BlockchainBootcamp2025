// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const INITIAL_OWNER = "{public-address}";

module.exports = buildModule("NFTMinterModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", INITIAL_OWNER);

  const lock = m.contract("NFTMinter", [initialOwner]);

  return { lock };
});
