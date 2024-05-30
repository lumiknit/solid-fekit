import { Component, JSX, JSXElement } from 'solid-js';
type Props = {
    children: JSXElement;
    onClick?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent>;
    onDrop?: JSX.EventHandlerUnion<HTMLDivElement, DragEvent>;
    class?: string;
};
declare const InputGroup: Component<Props>;
export default InputGroup;
