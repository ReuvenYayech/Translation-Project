
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
import googleWorker  from '../googleSheetsService'

export default {
  namespaced: true,
  state: {
 
  },
  mutations: {
    OPEN_GOOGLE_AUTH(){
      googleWorker.loadClient();
    },
    SAVE_TOKEN(payload){
      console.log(payload);
      console.log('SAVE_TOKEN');
    }
  },
  actions: {
    openGoogleAuth({commit}){
      commit('OPEN_GOOGLE_AUTH');
    },
    saveToken({commit},payload){
      commit('SAVE_TOKEN',payload);
    }
  },
  getters: {
   
  }
} 
