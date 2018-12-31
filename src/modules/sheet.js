const fs = require('fs')

export default {
  namespaced: true,
  state: {
    sheets: [{
        id: 1,
        name: "V-1",
        version: "1.1.95",
        isValid: false,
        date: "22/03/2016"
      },
      {
        id: 2,
        name: "V-2",
        version: "2.2.95",
        isValid: true,
        date: "22/22/2222"
      },
      {
        id: 1,
        name: "V-1",
        version: "1.1.95",
        isValid: false,
        date: "22/03/2016"
      },
      {
        id: 2,
        name: "V-2",
        version: "2.2.95",
        isValid: true,
        date: "22/22/2222"
      }
    ]
  },
  mutations: {
    GET_SHEETS() {
      console.log('GET_SHEETS');
      // try { 
      // var sheeData =  fs.readFileSync('SheetIds.json','utf-8')
      // state.sheets = JSON.parse(sheeData)
      //   }
      //   catch(e) {
      //      alert('Failed to get data the file !');
      //  }
    },
    SAVE_SHEET(state, payload) {
      console.log(payload.id);
      console.log('SAVE_SHEET');

      try {
        state.sheets.push({
          "id": payload.id,
          "name": payload.name,
          "version": payload.version,
          "is_valid": payload.isValid,
          "date": payload.date
        });
        fs.writeFileSync('SheetIds.json', JSON.stringify(state.sheets));
      } catch (e) {
        alert('Failed to save the file !');
      }

    }
  },
  actions: {
    loadSheets({
      commit
    }, payload) {
      console.log('loadSheets');
      commit('GET_SHEETS');
    },
    saveSheet({
      commit
    }, payload) {
      console.log('saveSheet');
      commit('SAVE_SHEET', payload);
    }
  }
}
