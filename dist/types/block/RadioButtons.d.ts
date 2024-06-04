export type RadioButton<T> = {
    color: string;
    label: string;
    value: T;
    class?: string;
};
type Props<T> = {
    class?: string;
    initialValue: T;
    buttons: RadioButton<T>[];
    onChange?: (value: T) => void;
};
declare function RadioButtons<T>(props: Props<T>): import("solid-js").JSX.Element;
export default RadioButtons;
