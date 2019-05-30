import Vue from 'vue';
import XylToast from './src/toast.vue'

let XylToastConstructor = Vue.extend(XylToast);

let instance;

const Toast = function (msg: string) {
    console.log(1111)
    instance = new XylToastConstructor({
        data: { msg, visible: false }
    });
    instance.$mount();
    document.body.appendChild(instance.$el);

    instance.visible = true;

}

export default Toast;

