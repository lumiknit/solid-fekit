import { Show, createEffect, createSignal, untrack, } from 'solid-js';
const Checkbox = (props) => {
    const [checked, setChecked] = createSignal(props.value);
    const handleChange = (e) => {
        const target = e.target;
        console.log(target.checked);
        setChecked(target.checked);
        props.onChange?.(target.checked);
    };
    createEffect(() => {
        const c = untrack(checked);
        if (props.value !== c) {
            setChecked(props.value);
        }
    });
    return (<label class="checkbox">
      <div class="wh-1 checkbox-box no-user-select cursor-pointer">
        <Show when={checked()}>
          <svg class={`stroke-${props.color || 'primary'}`} stroke-width={0.15} viewBox="0 0 1 1">
            // Check shape
            <path d="
							M 0.2 0.5
							L 0.45 0.75
							L 0.9 0.25
						"/>
          </svg>
        </Show>
      </div>
      <input type="checkbox" name="checkbox" checked={props.value} ref={props.ref} onChange={handleChange}/>
      {props.children}
    </label>);
};
export default Checkbox;
