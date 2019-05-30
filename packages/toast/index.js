import Vue from 'vue';
import toast from './src/toast.vue'

let XylToastConstructor = Vue.extend(toast);

let instance;

const Toast = function (msg) {
    instance = new XylToastConstructor({
        data: { msg }
    });
    instance.$mount();
    document.body.appendChild(instance.$el);

    instance.visible = true;
    return instance
}

export default Toast;

