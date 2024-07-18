import { Component, JSX, Ref } from 'solid-js';
type Props = {
    ref?: Ref<HTMLInputElement>;
    children?: JSX.Element;
    color?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
};
declare const Checkbox: Component<Props>;
export default Checkbox;
