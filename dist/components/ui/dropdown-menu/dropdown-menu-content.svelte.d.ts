import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: DropdownMenuPrimitive.ContentProps;
    slots: {
        default: {};
    };
    events: DropdownMenuPrimitive.ContentEvents;
};
export type DropdownMenuContentProps = typeof __propDef.props;
export type DropdownMenuContentEvents = typeof __propDef.events;
export type DropdownMenuContentSlots = typeof __propDef.slots;
export default class DropdownMenuContent extends SvelteComponent<DropdownMenuContentProps, DropdownMenuContentEvents, DropdownMenuContentSlots> {
}
export {};
