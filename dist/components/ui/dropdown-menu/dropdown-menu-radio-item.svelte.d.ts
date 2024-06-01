import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DropdownMenuPrimitive.RadioItemProps;
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.RadioItemEvents;
};
export type DropdownMenuRadioItemProps = typeof __propDef.props;
export type DropdownMenuRadioItemEvents = typeof __propDef.events;
export type DropdownMenuRadioItemSlots = typeof __propDef.slots;
export default class DropdownMenuRadioItem extends SvelteComponent<DropdownMenuRadioItemProps, DropdownMenuRadioItemEvents, DropdownMenuRadioItemSlots> {
}
export {};
