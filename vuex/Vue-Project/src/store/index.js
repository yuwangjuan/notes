import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import status from './stutus'


const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters:{},
  modules: {
      status
  },

})
export default store
