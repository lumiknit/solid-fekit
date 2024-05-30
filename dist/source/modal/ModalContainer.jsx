import { Show, For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { closeModal } from './state';
/**
 * Container of modals.
 *
 * Based on the state prop, it'll show & manager modals.
 */
const ModalContainer = (props) => {
    const closeTopModal = (e) => {
        if (e.target === e.currentTarget) {
            const modals = props.state.modals();
            if (modals.length > 0) {
                closeModal(props.state, modals[modals.length - 1].id);
            }
        }
    };
    return (<Show when={props.state.modals().length > 0}>
      <div class={`modal-container ${props.class}`} onClick={closeTopModal}>
        <For each={props.state.modals()}>
          {(modal) => (<div class={`modal-item ${modal.shown() ? props.state.shownClass : props.state.hiddenClass}`}>
              <Dynamic component={modal.component} close={() => closeModal(props.state, modal.id)} {...modal.props}/>
            </div>)}
        </For>
      </div>
    </Show>);
};
export default ModalContainer;
