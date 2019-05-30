import { VueConstructor } from 'vue/types';
import XylButton from './button/index'
import XylTag from './tag/index'
import XylToast from './toast/index'

import './index.css'
const version = '0.4.5';
const components = [
    XylButton,
    XylTag
]
declare global {
    interface Window {
        Vue?: VueConstructor;
    }
}

const install = (Vue: VueConstructor) => {
    components.map(Component => {
        Vue.use(Component);
    })
    Vue.prototype.$toast = XylToast
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    version,
    XylButton,
    XylTag,
    XylToast
}
export {
    install,
    version,
    XylButton,
    XylTag,
    XylToast
}


