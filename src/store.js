import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
const fs = require('fs');



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SheetIds: []
  },
  getters:{
    getSheetIds(state){
        return state.sheetIds;
    }
  },  
  mutations: {
    loadData(state){
      try { 
         var sheetIds =  fs.readFileSync('SheetIds.json','utf-8')
         const sheetIdsJSON = JSON.parse(sheetIds)
         state.sheetIds.push(sheetIdsJSON)
         }
        catch(e) {
           alert('Failed to save the file !');
       }
    },
    saveFile (state,payload) {
      try { 
      var sheetIds =  fs.readFileSync('SheetIds.json','utf-8')
      
        const sheetIdsJSON = JSON.parse(sheetIds)
        
        sheetIdsJSON.sheets.push({
          "id":payload.id,
          "name":payload.name,
          "version":payload.version,
          "is_valid":payload.isValid,
          "date":payload.date
        });
        fs.writeFileSync('SheetIds.json', JSON.stringify(sheetIdsJSON));
        state.sheetIds = sheetIdsJSON;
       }
      catch(e) {
         alert('Failed to save the file !');
     }
  }
},
  actions: {
    loadData ({ commit, dispatch }) {
      commit('loadData', dispatch );
    },
    saveFile ({commit},payload) {
      commit('saveFile',payload);
    }
  }
})