import { Component, Ref, type JSX } from 'solid-js';

type Props = {
  class?: string;
  ref?: Ref<HTMLInputElement>;
} & JSX.IntrinsicElements['input'];

const InputText: Component<Props> = (props) => {
  return (
    <input
      ref={props.ref}
      type="text"
      class={`form-control ${props.class ?? ''}`}
      placeholder={props.placeholder}
    />
  );
};

export default InputText;
