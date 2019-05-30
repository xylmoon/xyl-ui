import Vue from 'vue';
import XylToast from './src/toast.vue'

let XylToastConstructor = Vue.extend(XylToast);

let instance;

const Toast = function (msg: string) {
    instance = new XylToastConstructor({
        data: { msg, visible: false }
    });
    instance.$mount();
    document.body.appendChild(instance.$el);

    instance.visible = true;
    return instance
}

export default Toast;

