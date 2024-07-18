import { Component, JSXElement } from 'solid-js';
import { Props as ButtonProps } from './Button';
type Props<LabelProps> = {
    label: Component<LabelProps>;
    labelProps: LabelProps;
    children: JSXElement | JSXElement[];
} & ButtonProps;
declare function DropdownButton<L>(props: Props<L>): import("solid-js").JSX.Element;
export default DropdownButton;
