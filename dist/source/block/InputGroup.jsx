const InputGroup = (props) => {
    return (<div class={`input-group ${props.class ?? ''}`} onClick={props.onClick} onDrop={props.onDrop}>
      {props.children}
    </div>);
};
export default InputGroup;
