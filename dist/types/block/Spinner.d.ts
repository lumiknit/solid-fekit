import { Component, JSX } from 'solid-js';
type Props = {
    class?: string;
    color?: string;
} & JSX.IntrinsicElements['span'];
declare const Spinner: Component<Props>;
export default Spinner;
