import { Component } from 'solid-js';
import { ModalState } from './state';
type Props = {
    state: ModalState;
    class?: string;
};
/**
 * Container of modals.
 *
 * Based on the state prop, it'll show & manager modals.
 */
declare const ModalContainer: Component<Props>;
export default ModalContainer;
