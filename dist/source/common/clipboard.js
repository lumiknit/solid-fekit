// Clipboard helpers
const c = () => navigator.clipboard;
export let saveString;
export let loadString;
if (c() !== undefined &&
    c().readText !== undefined &&
    c().writeText !== undefined) {
    saveString = c().writeText;
    loadString = c().readText;
}
else {
    let clipboard = '';
    saveString = (value) => {
        // Save the value into the clipboard
        clipboard = value;
    };
    loadString = async () => clipboard;
}
