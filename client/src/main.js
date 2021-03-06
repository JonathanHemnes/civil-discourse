// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store';
import App from './App';
import router from './router';
import Contract from './helpers/Contract';


const result = Contract.getStatements();

console.log('hello');
console.log(result);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
