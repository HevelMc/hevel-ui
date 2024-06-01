import { SvelteComponent } from "svelte";
import { Toggle as TogglePrimitive } from 'bits-ui';
import { type Size, type Variant } from './index.js';
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        pressed?: boolean | undefined;
        onPressedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean> | undefined;
        asChild?: boolean | undefined;
        el?: HTMLButtonElement | undefined;
    } & import("svelte/elements.js").HTMLButtonAttributes & {
        variant?: Variant;
        size?: Size;
    };
    slots: {
        default: {};
    };
    events: TogglePrimitive.Events;
};
export type ToggleProps = typeof __propDef.props;
export type ToggleEvents = typeof __propDef.events;
export type ToggleSlots = typeof __propDef.slots;
export default class Toggle extends SvelteComponent<ToggleProps, ToggleEvents, ToggleSlots> {
}
export {};
