import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
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
export type DialogFooterProps = typeof __propDef.props;
export type DialogFooterEvents = typeof __propDef.events;
export type DialogFooterSlots = typeof __propDef.slots;
export default class DialogFooter extends SvelteComponent<DialogFooterProps, DialogFooterEvents, DialogFooterSlots> {
}
export {};
