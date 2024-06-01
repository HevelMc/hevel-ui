import { SvelteComponent } from "svelte";
import { Button as ButtonPrimitive } from 'bits-ui';
import { type Props } from './index.js';
declare const __propDef: {
    props: Props;
    slots: {
        default: {};
    };
    events: ButtonPrimitive.Events;
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
