import { Component, Ref } from 'solid-js';
type Props = {
    class?: string;
    ref?: Ref<HTMLInputElement>;
    placeholder?: string;
    color: string;
    onFiles?: (files: FileList) => void;
};
declare const InputFile: Component<Props>;
export default InputFile;
