import { For, createSignal } from 'solid-js';
import InputGroup from './InputGroup';
import Button from './Button';
function RadioButtons(props) {
    // Find the button with the initial value
    const index = props.buttons.findIndex((btn) => btn.value === props.initialValue);
    const [selected, setSelected] = createSignal(index);
    const handleChange = (index) => {
        setSelected(index);
        props.onChange?.(props.buttons[index].value);
    };
    return (<InputGroup class={props.class}>
      <For each={props.buttons}>
        {(btn, idx) => (<Button color={btn.color} outline={selected() !== idx()} class={btn.class} onClick={() => handleChange(idx())}>
            {btn.label}
          </Button>)}
      </For>
    </InputGroup>);
}
export default RadioButtons;
