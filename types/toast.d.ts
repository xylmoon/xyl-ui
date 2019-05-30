import Vue from 'Vue'


type ToastMessage = string | number;



export interface XylToast extends Vue {

}

export interface toast {
    (message?: ToastMessage): XylToast;
}


declare module 'vue/types/vue' {
    interface Vue {
        $toast: toast
    }
}

export const toast: toast;
