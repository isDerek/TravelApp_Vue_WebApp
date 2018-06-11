/*
* @Author: Derek
* @Date:   2018-05-11 09:05:37
* @Last Modified by:   Derek
* @Last Modified time: 2018-05-11 11:18:09
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
