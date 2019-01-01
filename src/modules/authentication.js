const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');
import googleWorker from '../googleSheetsService'
const TOKEN_PATH = 'token.json';

export default {
  namespaced: true,
  state: {
    token: ""
  },
  mutations: {
    
    OPEN_GOOGLE_AUTH() {
      googleWorker.loadClient();
    },
    SAVE_TOKEN(state, payload) {
     var  oAuth2Client = this.getters["authentication/getCredentials"];
      // Check if we have previously stored a token.
      oAuth2Client.getToken(payload.token, (err, token) => {
        if (err) return console.error('Error while trying to retrieve access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        console.log('SS');
      });
    }
  },
  actions: {
    openGoogleAuth({
      commit
    }) {
      commit('OPEN_GOOGLE_AUTH');
    },
    saveToken({
      commit
    }, payload) {
      console.log(payload.token);
      commit('SAVE_TOKEN', payload);
    }
  },
  getters: {
    getCredentials(){
   
      fs.readFile('credentials.json', (err, content) => {
        if (err)
            return console.log('Error loading client secret file:', err);
          var credentials =JSON.parse(content);

            console.log(credentials);
            //4/xQBMN1ycYee4UbfvzylfYLPfAMqOoVG8Gii_-CaHfvLCVwF9m8FvPE8
             const {client_secret, client_id, redirect_uris} = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]);
           return oAuth2Client;
    });
 
    },
  }
}
