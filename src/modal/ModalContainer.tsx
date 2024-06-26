import {
  Component,
  JSX,
  Show,
  For,
  mergeProps,
  createEffect,
  splitProps,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { closeModal, mergeContainerProps, store } from './store';

export type ContainerProps = {
  /**
   * Class to be applied when the modal is hidden.
   */
  hiddenClass?: string;

  /**
   * Class to be applied when the modal is shown.
   */
  shownClass?: string;

  /**
   * Open/close transition duration in milliseconds.
   */
  transitionMS?: number;
} & JSX.IntrinsicElements['div'];

/**
 * Container of modals.
 *
 * Based on the state prop, it'll show & manager modals.
 */
const ModalContainer: Component<ContainerProps> = (props_) => {
  const props = mergeProps(
    {
      hiddenClass: 'hidden',
      shownClass: 'shown',
      transitionMS: 300,
    },
    props_
  );
  const [locals, divProps] = splitProps(props, [
    'class',
    'hiddenClass',
    'shownClass',
    'transitionMS',
  ]);

  createEffect(() => {
    mergeContainerProps(props);
  });

  const closeTopModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (store.modals.length > 0) {
        closeModal(store.modals[store.modals.length - 1].id);
      }
    }
  };
  return (
    <Show when={store.modals.length > 0}>
      <div
        {...divProps}
        class={`modal-container ${locals.class}`}
        onClick={closeTopModal}
      >
        <For each={store.modals}>
          {(modal) => (
            <div
              class={`modal-item ${modal.shown() ? locals.shownClass : locals.hiddenClass}`}
            >
              <Dynamic
                component={modal.component}
                close={() =>
                  closeModal(store.modals[store.modals.length - 1].id)
                }
                {...modal.props}
              />
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

export default ModalContainer;
