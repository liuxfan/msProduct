import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);
const state={
    openId: '小凡在写代码',
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})