// Clipboard helpers

const c = () => navigator.clipboard;

export let saveString: (value: string) => void;
export let loadString: () => Promise<string>;

if (
  c() !== undefined &&
  c().readText !== undefined &&
  c().writeText !== undefined
) {
  saveString = c().writeText;
  loadString = c().readText;
} else {
  let clipboard: string = '';
  saveString = (value: string) => {
    // Save the value into the clipboard
    clipboard = value;
  };
  loadString = async () => clipboard;
}
