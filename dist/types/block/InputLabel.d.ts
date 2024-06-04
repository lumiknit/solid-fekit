import { Component, JSXElement } from 'solid-js';
export type Props = {
    children: JSXElement;
    class?: string;
    color: string;
    outline?: boolean;
};
declare const InputLabel: Component<Props>;
export default InputLabel;
