import Vue from 'vue';
import Vuex from 'vuex';
import Contract from '../helpers/Contract';

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
      Contract.addStatement(comment);
    }
  }
});

export default store;