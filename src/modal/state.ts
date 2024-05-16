import { Accessor, Component, createSignal, Setter } from 'solid-js';

/**
 * Modal ID Type
 */
type ModalID = string;

export type ModalCallbacks = {
  /** Callback for modal creation (before transition) */
  onMount?: () => void;

  /** Callback for modal creation (after transition) */
  onOpened?: () => void;

  /**
   * Callback for modal close. (before transition)
   *
   * @returns If false, cancel modal close.
   */
  onClose?: () => boolean;

  /** Callback for modal close (after transition) */
  onUnmount?: () => void;
};

type WithClose = {
  close: () => void;
};

/**
 * Data of each modals.
 */
export type ModalData<Props> = {
  id: ModalID;
  shown: Accessor<boolean>;
  setShown: Setter<boolean>;

  timeout: number;

  component: Component<Props & WithClose>;
  props: Props;
  callbacks: ModalCallbacks;
};

/**
 * (Global) state of modals.
 * It must be attached to exactly one container,
 * where all modals should be rendered.
 */
export type ModalState = {
  nextID: number;
  modals: Accessor<ModalData<any>[]>;
  setModals: Setter<ModalData<any>[]>;

  hiddenClass?: string;
  shownClass?: string;
  transitionMS?: number;
};

export const createModalState = (
  hiddenClass: string = 'hidden',
  shownClass: string = 'shown',
  transitionMS: number = 300
): ModalState => {
  const [modals, setModals] = createSignal<ModalData<any>[]>([]);
  return {
    nextID: 0,
    modals,
    setModals,
    hiddenClass,
    shownClass,
    transitionMS,
  };
};

/**
 * Open modal in the given state.
 */
export const openModal = <Props>(
  state: ModalState,
  component: Component<Props & WithClose>,
  props: Props,
  callbacks: ModalCallbacks = {}
): ModalID => {
  const id = state.nextID.toString(36);
  state.nextID += 1;

  const [shown, setShown] = createSignal<boolean>(false);
  const shownTimeout = window.setTimeout(() => {
    callbacks.onOpened?.();
  }, state.transitionMS);
  const modal: ModalData<Props> = {
    id,
    shown,
    setShown,
    timeout: shownTimeout,
    component,
    props,
    callbacks,
  };

  state.setModals((ms) => [...ms, modal]);

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
export const closeModal = (state: ModalState, id: ModalID): void => {
  // Find the modal
  const modal = state.modals().find((modal) => modal.id === id);
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
    state.setModals((ms) => ms.filter((modal) => modal.id !== id));
  }, state.transitionMS);
};
