import { Component, JSX } from 'solid-js';

type Props = {
  class?: string;
  color?: string;
} & JSX.IntrinsicElements['span'];

const Spinner: Component<Props> = (props) => (
  <span
    {...props}
    class={`wh-1 spinner border-${props.color || 'primary'} ${props.class || ''}`}
  />
);

export default Spinner;
