import { createStore } from 'solid-js/store';
import { ModalCallbacks, ModalData, ModalID, WithClose } from './types';
import { Component, createSignal } from 'solid-js';
import { ContainerProps } from './ModalContainer';

/**
 * Modals Store
 */
type ModalsStore = {
  nextID: number;
  modals: ModalData<any>[];

  transitionMS: number;
};

/**
 * Modals Store
 */
export const [store, setStore] = createStore<ModalsStore>({
  nextID: 0,
  modals: [],
  transitionMS: 300,
});

/**
 * Update store's options based on the container props.
 */
export const mergeContainerProps = (props: ContainerProps): void => {
  if (typeof props.transitionMS === 'number')
    setStore('transitionMS', props.transitionMS);
};

/**
 * Allocate new ID based on the store.
 *
 * @returns Unique ID in string
 */
const allocID = (): ModalID => {
  const id = store.nextID.toString(36);
  setStore('nextID', (i) => i + 1);
  return id;
};

/**
 * Open modal in the given state.
 */
export const openModal = <Props>(
  component: Component<Props & WithClose>,
  props: Props,
  callbacks: ModalCallbacks = {}
): ModalID => {
  const id = allocID();

  const [shown, setShown] = createSignal<boolean>(false);

  const shownTimeout = window.setTimeout(() => {
    callbacks.onOpened?.();
  }, store.transitionMS);

  const modal: ModalData<Props> = {
    id,
    shown,
    setShown,
    timeout: shownTimeout,
    component,
    props,
    callbacks,
  };

  setStore('modals', (ms) => [...ms, modal]);

  // onMount
  setTimeout(() => {
    callbacks.onMount?.();
    setShown(true);
  });
  return id;
};

/**
 * Close modal in the given state.
 */
export const closeModal = (id: ModalID): void => {
  // Find the modal
  const modal = store.modals.find((modal) => modal.id === id);
  if (!modal) {
    return;
  }

  clearTimeout(modal.timeout);

  // onClose
  const oc = modal.callbacks.onClose;
  if (oc && !oc()) {
    return;
  }

  modal.setShown(false);

  // onUnmount
  modal.timeout = window.setTimeout(() => {
    modal.callbacks.onUnmount?.();
    setStore('modals', (ms) => ms.filter((modal) => modal.id !== id));
  }, store.transitionMS);
};
