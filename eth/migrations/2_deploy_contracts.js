const HashTimeLockERC20 = artifacts.require("HashTimeLockERC20");

module.exports = function(deployer) {
  deployer.deploy(HashTimeLockERC20);
};
