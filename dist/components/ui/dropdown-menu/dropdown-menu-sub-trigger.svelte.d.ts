import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("bits-ui/dist/internal").HTMLDivAttributes & {
        inset?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.SubTriggerEvents;
};
export type DropdownMenuSubTriggerProps = typeof __propDef.props;
export type DropdownMenuSubTriggerEvents = typeof __propDef.events;
export type DropdownMenuSubTriggerSlots = typeof __propDef.slots;
export default class DropdownMenuSubTrigger extends SvelteComponent<DropdownMenuSubTriggerProps, DropdownMenuSubTriggerEvents, DropdownMenuSubTriggerSlots> {
}
export {};
