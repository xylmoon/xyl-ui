import XylButton from './src/button.vue'
import { VueConstructor } from 'vue/types'
export default (Vue: VueConstructor) => {
    Vue.component(XylButton.name, XylButton)
}
