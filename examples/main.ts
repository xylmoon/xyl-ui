

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import xylui from '../packages/index'
import { XylToast } from '../packages/index'
Vue.use(xylui)
XylToast('123213')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
