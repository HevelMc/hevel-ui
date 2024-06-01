import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogHeaderProps = typeof __propDef.props;
export type DialogHeaderEvents = typeof __propDef.events;
export type DialogHeaderSlots = typeof __propDef.slots;
export default class DialogHeader extends SvelteComponent<DialogHeaderProps, DialogHeaderEvents, DialogHeaderSlots> {
}
export {};
