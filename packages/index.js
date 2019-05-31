import Button from './button/index'
import Tag from './tag/index'
import Toast from './toast/index'

import './index.css'
const version = '0.5.9';
const components = [
    Button,
    Tag
]

const install = (Vue) => {
    components.map(Component => {
        Vue.component(Component.name, Component);
    })
    Vue.prototype.$toast = Toast
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export default {
    install,
    version,
    Button,
    Tag,
    Toast
}


