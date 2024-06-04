import Button from './Button';
import InputGroup from './InputGroup';
import InputText from './InputText';
const InputFile = (props) => {
    let textRef;
    let fileRef;
    const hackRef = (ref) => {
        fileRef = ref;
        if (typeof props.ref === 'function')
            props.ref(ref);
    };
    const handleChange = (e) => {
        if (props.onFiles)
            props.onFiles(e.target.files);
        textRef.value = fileRef.value;
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (props.onFiles)
            props.onFiles(e.dataTransfer.files);
    };
    return (<InputGroup class={props.class} onDrop={handleDrop}>
      <InputText class={`flex-1`} ref={textRef} placeholder={props.placeholder} onClick={() => {
            fileRef?.click();
        }}/>
      <input ref={hackRef} type="file" class="d-none" onChange={handleChange}/>
      <Button color={props.color} onClick={() => {
            fileRef?.click();
        }}>
        ...
      </Button>
    </InputGroup>);
};
export default InputFile;
