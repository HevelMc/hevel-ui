import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DropdownMenuPrimitive.ItemProps & {
        inset?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.ItemEvents;
};
export type DropdownMenuItemProps = typeof __propDef.props;
export type DropdownMenuItemEvents = typeof __propDef.events;
export type DropdownMenuItemSlots = typeof __propDef.slots;
export default class DropdownMenuItem extends SvelteComponent<DropdownMenuItemProps, DropdownMenuItemEvents, DropdownMenuItemSlots> {
}
export {};
