import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: ContextMenuPrimitive.CheckboxItemProps;
    slots: {
        default: {};
    };
    events: ContextMenuPrimitive.CheckboxItemEvents;
};
export type ContextMenuCheckboxItemProps = typeof __propDef.props;
export type ContextMenuCheckboxItemEvents = typeof __propDef.events;
export type ContextMenuCheckboxItemSlots = typeof __propDef.slots;
export default class ContextMenuCheckboxItem extends SvelteComponent<ContextMenuCheckboxItemProps, ContextMenuCheckboxItemEvents, ContextMenuCheckboxItemSlots> {
}
export {};
