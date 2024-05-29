import { Component, JSX, JSXElement, Ref } from 'solid-js';
type ComponentType = {
    ref?: Ref<HTMLButtonElement>;
    children: JSXElement;
    class?: string;
    color: string;
    outline?: boolean;
    small?: boolean;
    disabled?: boolean;
};
export type Props = ComponentType & JSX.IntrinsicElements['button'];
declare const Button: Component<Props>;
export default Button;
