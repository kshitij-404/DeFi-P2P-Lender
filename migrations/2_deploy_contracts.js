const Lending = artifacts.require("Lending");

module.exports = function(deployer) {
  deployer.deploy(Lending, "0xfF25039E9dBf58ab298F59A70f7EC87Fc782309b");
};
