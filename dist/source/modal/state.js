import { createSignal } from 'solid-js';
export const createModalState = (hiddenClass = 'hidden', shownClass = 'shown', transitionMS = 300) => {
    const [modals, setModals] = createSignal([]);
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
export const openModal = (state, component, props, callbacks = {}) => {
    const id = state.nextID.toString(36);
    state.nextID += 1;
    const [shown, setShown] = createSignal(false);
    const shownTimeout = window.setTimeout(() => {
        callbacks.onOpened?.();
    }, state.transitionMS);
    const modal = {
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
export const closeModal = (state, id) => {
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
