import { Accessor, Component, Setter } from 'solid-js';
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
export declare const createModalState: (hiddenClass?: string, shownClass?: string, transitionMS?: number) => ModalState;
/**
 * Open modal in the given state.
 */
export declare const openModal: <Props>(state: ModalState, component: Component<Props & WithClose>, props: Props, callbacks?: ModalCallbacks) => ModalID;
/**
 * Close modal in the given state.
 */
export declare const closeModal: (state: ModalState, id: ModalID) => void;
export {};
