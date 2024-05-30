import { createSignal } from 'solid-js';
import Button from './Button';
function DropdownButton(props) {
    const [visible, setVisible] = createSignal(false);
    const buttonProps = () => {
        const p = { ...props };
        delete p.label;
        delete p.children;
        return p;
    };
    return (<div class="dropdown">
      <Button {...buttonProps()} onClick={() => setVisible((v) => !v)}>
        {props.label(props.labelProps)}
      </Button>
      <div class={`dropdown-menu shadow-2 ${visible() ? 'visible' : 'hidden'}`} onClick={() => {
            setVisible(false);
        }}>
        {props.children}
      </div>
    </div>);
}
export default DropdownButton;
