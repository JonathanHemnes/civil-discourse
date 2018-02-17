import Web3 from 'web3';
import CivilDiscourseABI from './../../../blockchain/build/contracts/CivilDiscourse.json';

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const contractOptions = {
  gas: 1500000,
  gasPrice: '30000000000000'
}
const MyContract = new web3.eth.Contract(CivilDiscourseABI.abi, CivilDiscourseABI.networks['5777'].address);


function addStatement(statement) {
  MyContract.methods
    .AddStatement(statement)
    .send({from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57', gas: 1500000, gasPrice: '3000000000'})
    .on('confirmation', function(confNum, receipt) {
      debugger;
    });
}

export default {
  addStatement
}