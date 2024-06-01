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
export type SheetHeaderProps = typeof __propDef.props;
export type SheetHeaderEvents = typeof __propDef.events;
export type SheetHeaderSlots = typeof __propDef.slots;
export default class SheetHeader extends SvelteComponent<SheetHeaderProps, SheetHeaderEvents, SheetHeaderSlots> {
}
export {};
