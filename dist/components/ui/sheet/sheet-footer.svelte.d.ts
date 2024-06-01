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
export type SheetFooterProps = typeof __propDef.props;
export type SheetFooterEvents = typeof __propDef.events;
export type SheetFooterSlots = typeof __propDef.slots;
export default class SheetFooter extends SvelteComponent<SheetFooterProps, SheetFooterEvents, SheetFooterSlots> {
}
export {};
