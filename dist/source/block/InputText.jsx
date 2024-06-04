const InputText = (props) => {
    return (<input ref={props.ref} type="text" class={`form-control ${props.class ?? ''}`} placeholder={props.placeholder}/>);
};
export default InputText;
