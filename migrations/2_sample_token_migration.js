const SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "ZiaSampleToken", "ZTK", 2, 10000);
};
