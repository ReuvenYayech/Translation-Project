import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Worker from  './registerServiceWorker'

//For eventBus
Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false



new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
