import '../../src/styles.scss';
import './App.css';

import { ModalContainer, createModalState, openModal } from '../../src/modal';

const ModalComponent = (props: { close: () => void }) => {
  return (
    <div>
      Hello
      <button onClick={props.close}> close </button>
    </div>
  );
};

const App = () => {
  const state = createModalState();
  return (
    <>
      <ModalContainer state={state} />

      <button onClick={() => openModal(state, ModalComponent, {})}>
        {' '}
        open moddal{' '}
      </button>
    </>
  );
};

export default App;
