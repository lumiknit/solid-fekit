const Spinner = (props) => (<span {...props} class={`wh-1 spinner border-${props.color || 'primary'} ${props.class || ''}`}/>);
export default Spinner;
