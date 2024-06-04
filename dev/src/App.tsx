import '../../src/index.scss';
import '../../src/block.scss';

import './App.css';

import { ModalContainer, openModal } from '../../src/modal';
import {
  Button,
  Checkbox,
  DropdownButton,
  RadioButtons,
  Spinner,
} from '../../src/block';
import { createSignal } from 'solid-js';

const ModalComponent = (props: { close: () => void }) => {
  return (
    <div>
      Hello
      <button onClick={props.close}> close </button>
    </div>
  );
};

const App = () => {
  const [v, setV] = createSignal<boolean>(false);

  return (
    <>
      <ModalContainer />

      <Button onClick={() => openModal(ModalComponent, {})} color="primary">
        open modal
      </Button>

      <br />

      <DropdownButton
        color="primary"
        label={() => <> Hello </>}
        labelProps={undefined}
      >
        <a> a</a>
        <a>b</a>
        <hr />
        <a> c </a>
      </DropdownButton>

      <br />

      <Spinner color="primary" />

      <Checkbox color="danger" value={v()}>
        askd
      </Checkbox>
      <Button onClick={() => setV(!v())}>toggle</Button>

      <RadioButtons
        initialValue="a"
        buttons={[
          { color: 'primary', label: 'a', value: 'a' },
          { color: 'danger', label: 'b', value: 'b' },
          { color: 'success', label: 'c', value: 'c' },
        ]}
        onChange={(v) => console.log(v)}
      />
    </>
  );
};

export default App;
