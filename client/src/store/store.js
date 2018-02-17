import Vue from 'vue';
import Vuex from 'vuex';
import Web3 from 'web3';
import CivilDiscourseABI from './../../../blockchain/build/contracts/CivilDiscourse.json';


let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
const MyContract = new web3.eth.Contract(CivilDiscourseABI.abi, CivilDiscourseABI.networks['5777'].address);
const result = MyContract.methods.AddStatement('Test');
result
  .send({gas: 1500000, gasPrice: '30000000000000'})
  .then(res => {
    console.log(res);
    debugger;
  })
debugger;




Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    commentAccepted: false
  },
  mutations: {
    SET_COMMENT_ACCEPTED_TRUE (state) {
      state.commentAccepted = true;
    }
  },
  actions: {
    submitComment (state, comment) {
      // submit comment to backend here
      console.log('Note action', comment);
      this.commit('SET_COMMENT_ACCEPTED_TRUE');
    }
  }
});

export default store;