import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import sheet from './modules/sheet'

Vue.use(Vuex)

export default new Vuex.Store({
      modules: {
        authentication,
        sheet
      },
      state: {},
      mutations: {},
      actions: {
        openGoogleAuth({commit}) {
          console.log('Ss');
        }
      },
        getters: {}
      })
