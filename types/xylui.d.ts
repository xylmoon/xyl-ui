import Vue from 'vue';

declare class UIComponent extends Vue {
    static install(vue: typeof Vue): void
}

export const version: string;

export function install(vue: typeof Vue): void

export declare class Button extends UIComponent { }

export declare class Tag extends UIComponent { }