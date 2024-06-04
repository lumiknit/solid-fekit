import { Component, JSX } from 'solid-js';
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
declare const ModalContainer: Component<ContainerProps>;
export default ModalContainer;
