var CivilDiscourse = artifacts.require('./contracts/CivilDiscourse.sol');

module.exports = function(deployer) {
    deployer.deploy(CivilDiscourse);
}
