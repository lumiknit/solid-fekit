import { Component, JSXElement, createSignal } from 'solid-js';

import Button, { Props as ButtonProps } from './Button';

type Props<LabelProps> = {
  label: Component<LabelProps>;
  labelProps: LabelProps;
  children: JSXElement | JSXElement[];
} & ButtonProps;

function DropdownButton<L>(props: Props<L>) {
  const [visible, setVisible] = createSignal(false);
  const buttonProps = (): ButtonProps => {
    const p: any = { ...props };
    delete p.label;
    delete p.children;
    return p;
  };
  return (
    <div class="dropdown">
      <Button {...buttonProps()} onClick={() => setVisible((v) => !v)}>
        {props.label(props.labelProps)}
      </Button>
      <div
        class={`dropdown-menu shadow-2 ${visible() ? 'visible' : 'hidden'}`}
        onClick={() => {
          setVisible(false);
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default DropdownButton;
