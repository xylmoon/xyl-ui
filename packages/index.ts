import { VueConstructor } from 'vue/types';
import Xylbutton from './button/index'
import XylTag from './tag/index'

import './index.css'
const version = '2.0.0-beta.2';

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
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    install,
    version,
    Xylbutton,
    XylTag
}
export default {
    install,
    version
}