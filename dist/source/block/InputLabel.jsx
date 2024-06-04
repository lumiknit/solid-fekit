const InputLabel = (props) => {
    return (<div class={`form-control btn-${props.outline ? 'ol-' : ''}${props.color} ${props.class ?? ''}`}>
      {props.children}
    </div>);
};
export default InputLabel;
