import { SvelteComponent } from "svelte";
import { Button as ButtonPrimitive } from 'bits-ui';
import { type Props } from '../../ui/button/index.js';
declare const __propDef: {
    props: Props & {
        onClick: () => Promise<void> | void;
    };
    slots: {
        default: {};
    };
    events: ButtonPrimitive.Events;
};
export type LoaderButtonProps = typeof __propDef.props;
export type LoaderButtonEvents = typeof __propDef.events;
export type LoaderButtonSlots = typeof __propDef.slots;
export default class LoaderButton extends SvelteComponent<LoaderButtonProps, LoaderButtonEvents, LoaderButtonSlots> {
}
export {};
