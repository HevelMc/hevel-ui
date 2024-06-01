import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: DropdownMenuPrimitive.CheckboxItemProps;
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.CheckboxItemEvents;
};
export type DropdownMenuCheckboxItemProps = typeof __propDef.props;
export type DropdownMenuCheckboxItemEvents = typeof __propDef.events;
export type DropdownMenuCheckboxItemSlots = typeof __propDef.slots;
export default class DropdownMenuCheckboxItem extends SvelteComponent<DropdownMenuCheckboxItemProps, DropdownMenuCheckboxItemEvents, DropdownMenuCheckboxItemSlots> {
}
export {};
