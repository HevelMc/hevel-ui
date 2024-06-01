import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
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
    events: ContextMenuPrimitive.SubTriggerEvents;
};
export type ContextMenuSubTriggerProps = typeof __propDef.props;
export type ContextMenuSubTriggerEvents = typeof __propDef.events;
export type ContextMenuSubTriggerSlots = typeof __propDef.slots;
export default class ContextMenuSubTrigger extends SvelteComponent<ContextMenuSubTriggerProps, ContextMenuSubTriggerEvents, ContextMenuSubTriggerSlots> {
}
export {};
