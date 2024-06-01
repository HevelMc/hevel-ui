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
export type DropdownMenuLabelProps = typeof __propDef.props;
export type DropdownMenuLabelEvents = typeof __propDef.events;
export type DropdownMenuLabelSlots = typeof __propDef.slots;
export default class DropdownMenuLabel extends SvelteComponent<DropdownMenuLabelProps, DropdownMenuLabelEvents, DropdownMenuLabelSlots> {
}
export {};
