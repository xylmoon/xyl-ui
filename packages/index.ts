import { VueConstructor } from 'vue/types';
import Xylbutton from './button/index'
import XylTag from './tag/index'
import XylToast from './toast/index'

import './index.css'
const version = '0.2.5';

const components = [
    Xylbutton,
    XylTag
]
declare global {
    interface Window {
        Vue?: VueConstructor;
    }
}

const install = (Vue: VueConstructor)=> {
    components.map(Component => {
       Vue.use(Component);
    })
    Vue.prototype.$toast = XylToast
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    install,
    version,
    Xylbutton,
    XylTag,
    XylToast
}
export default {
    install,
    version
}