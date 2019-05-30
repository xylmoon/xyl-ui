

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import xylui from '../packages/index'
import { install, version, XylTag, XylButton} from '../packages/index'
Vue.use(xylui)
console.log(install, version, XylTag, XylButton)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
