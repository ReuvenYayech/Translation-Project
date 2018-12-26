import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
const fs = require('fs');



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sheets: []
  },
  getters:{},  
  mutations: {
    GET_SHEETS(){
      try { 
      var sheeData =  fs.readFileSync('SheetIds.json','utf-8')
      state.sheets = JSON.parse(sheeData)
    }
    catch(e) {
       alert('Failed to get data the file !');
   }
    },
    SAVE_SHEET (state,payload) {
      try { 
        stat.sheets.push({
          "id":payload.id,
          "name":payload.name,
          "version":payload.version,
          "is_valid":payload.isValid,
          "date":payload.date
        });
        fs.writeFileSync('SheetIds.json', JSON.stringify(sheetIdsJSON)); 
       }
      catch(e) {
         alert('Failed to save the file !');
     }
  }
},
  actions: {
    loadSheets ({commit},payload) {
      commit('GET_SHEETS');
    },
    saveFile ({commit},payload) {
      commit('SAVE_SHEET',payload);
    }
  }
})