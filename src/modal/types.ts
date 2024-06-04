import { Accessor, Component, Setter } from 'solid-js';

/**
 * Modal ID Type
 */
export type ModalID = string;

/**
 * Modal Callbacks
 */
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

/**
 * With close callback
 */
export type WithClose = {
  /**
   * Self-close function. This will be passed by the ModalContainer.
   */
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
