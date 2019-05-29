import XylTag from './src/tag.vue'
import { VueConstructor } from 'vue/types'
export default (Vue: VueConstructor) => {
    Vue.component(XylTag.name, XylTag)
}
