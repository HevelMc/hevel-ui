import { SvelteComponent } from "svelte";
import { type ToggleVariants } from './index.js';
declare const __propDef: {
    props: {
        value: string;
        disabled?: boolean | undefined;
        asChild?: boolean | undefined;
        el?: HTMLButtonElement | undefined;
    } & import("svelte/elements.js").HTMLButtonAttributes & ToggleVariants;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToggleGroupItemProps = typeof __propDef.props;
export type ToggleGroupItemEvents = typeof __propDef.events;
export type ToggleGroupItemSlots = typeof __propDef.slots;
export default class ToggleGroupItem extends SvelteComponent<ToggleGroupItemProps, ToggleGroupItemEvents, ToggleGroupItemSlots> {
}
export {};
