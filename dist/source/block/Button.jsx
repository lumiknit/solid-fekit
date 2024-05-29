const Button = (props) => {
    const elemProps = () => {
        const p = { ...props };
        for (const key of [
            'ref',
            'children',
            'class',
            'color',
            'outline',
            'small',
            'disabled',
        ]) {
            delete p[key];
        }
        return p;
    };
    return (<button {...elemProps()} ref={props.ref} class={`no-user-select btn btn-${props.outline ? 'ol-' : ''}${props.color} ${props.class ?? ''} ${props.small ? 'btn-sm' : ''}`}>
      {props.children}
    </button>);
};
export default Button;