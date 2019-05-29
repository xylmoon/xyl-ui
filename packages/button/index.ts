import Xylbutton from './src/button.vue'
import { VueConstructor } from 'vue/types'
export default (Vue: VueConstructor) => {
    Vue.component(Xylbutton.name, Xylbutton)
}
