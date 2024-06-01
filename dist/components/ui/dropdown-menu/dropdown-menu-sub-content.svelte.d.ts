import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DropdownMenuPrimitive.ContentProps;
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.SubContentEvents;
};
export type DropdownMenuSubContentProps = typeof __propDef.props;
export type DropdownMenuSubContentEvents = typeof __propDef.events;
export type DropdownMenuSubContentSlots = typeof __propDef.slots;
export default class DropdownMenuSubContent extends SvelteComponent<DropdownMenuSubContentProps, DropdownMenuSubContentEvents, DropdownMenuSubContentSlots> {
}
export {};
