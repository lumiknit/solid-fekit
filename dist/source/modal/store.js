import { createStore } from 'solid-js/store';
import { createSignal } from 'solid-js';
/**
 * Modals Store
 */
export const [store, setStore] = createStore({
    nextID: 0,
    modals: [],
    transitionMS: 300,
});
/**
 * Update store's options based on the container props.
 */
export const mergeContainerProps = (props) => {
    if (typeof props.transitionMS === 'number')
        setStore('transitionMS', props.transitionMS);
};
/**
 * Allocate new ID based on the store.
 *
 * @returns Unique ID in string
 */
const allocID = () => {
    const id = store.nextID.toString(36);
    setStore('nextID', (i) => i + 1);
    return id;
};
/**
 * Open modal in the given state.
 */
export const openModal = (component, props, callbacks = {}) => {
    const id = allocID();
    const [shown, setShown] = createSignal(false);
    const shownTimeout = window.setTimeout(() => {
        callbacks.onOpened?.();
    }, store.transitionMS);
    const modal = {
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
export const closeModal = (id) => {
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
