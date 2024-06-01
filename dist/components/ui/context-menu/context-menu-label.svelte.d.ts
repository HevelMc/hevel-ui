import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("bits-ui/dist/internal").HTMLDivAttributes & {
        inset?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ContextMenuLabelProps = typeof __propDef.props;
export type ContextMenuLabelEvents = typeof __propDef.events;
export type ContextMenuLabelSlots = typeof __propDef.slots;
export default class ContextMenuLabel extends SvelteComponent<ContextMenuLabelProps, ContextMenuLabelEvents, ContextMenuLabelSlots> {
}
export {};
