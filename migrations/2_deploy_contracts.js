const Lending = artifacts.require("Lending");

module.exports = function(deployer) {
  deployer.deploy(Lending, "0xd5316978ea3d7b85196fb68723C72Fa9aDeb7871");
};
