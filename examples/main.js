import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import xylui from '../packages/index'
console.log(xylui)
import { Button, Tag, Toast } from '../packages/index'
Vue.use(xylui)
Toast('123123')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
