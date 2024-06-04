import { ModalCallbacks, ModalData, ModalID, WithClose } from './types';
import { Component } from 'solid-js';
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
export declare const store: ModalsStore, setStore: import("solid-js/store").SetStoreFunction<ModalsStore>;
/**
 * Update store's options based on the container props.
 */
export declare const mergeContainerProps: (props: ContainerProps) => void;
/**
 * Open modal in the given state.
 */
export declare const openModal: <Props>(component: Component<Props & WithClose>, props: Props, callbacks?: ModalCallbacks) => ModalID;
/**
 * Close modal in the given state.
 */
export declare const closeModal: (id: ModalID) => void;
export {};
