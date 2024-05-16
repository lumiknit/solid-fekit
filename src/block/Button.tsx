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

const Button: Component<Props> = (props) => {
  const elemProps = () => {
    const p: JSX.IntrinsicElements['button'] = { ...props };
    for (const key of [
      'ref',
      'children',
      'class',
      'color',
      'outline',
      'small',
      'disabled',
    ]) {
      delete (p as any)[key];
    }
    return p;
  };
  return (
    <button
      {...elemProps()}
      ref={props.ref}
      class={`no-user-select btn btn-${props.outline ? 'ol-' : ''}${
        props.color
      } ${props.class ?? ''} ${props.small ? 'btn-sm' : ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
