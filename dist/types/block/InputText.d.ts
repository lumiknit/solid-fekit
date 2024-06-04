import { Component, Ref, type JSX } from 'solid-js';
type Props = {
    class?: string;
    ref?: Ref<HTMLInputElement>;
} & JSX.IntrinsicElements['input'];
declare const InputText: Component<Props>;
export default InputText;
