import Web3 from 'web3';
import CivilDiscourseABI from './../../../blockchain/build/contracts/CivilDiscourse.json';

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const contractOptions = {
  gas: 1500000,
  gasPrice: '30000000000000',
  from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}
const MyContract = new web3.eth.Contract(CivilDiscourseABI.abi, CivilDiscourseABI.networks['5777'].address);


function addStatement(statement) {
  MyContract.methods
    .AddStatement(statement)
    .send(contractOptions)
    .on('confirmation', function(confNum, receipt) {
      debugger;
    });
}

function getStatements() {
  return MyContract
    .GetStatements(
      function(err, res) {
        console.log(err, res);
      }
    )
}

export default {
  addStatement,
  getStatements
}