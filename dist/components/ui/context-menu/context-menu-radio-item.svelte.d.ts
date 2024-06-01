import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: ContextMenuPrimitive.RadioItemProps;
    slots: {
        default: {};
    };
    events: ContextMenuPrimitive.RadioItemEvents;
};
export type ContextMenuRadioItemProps = typeof __propDef.props;
export type ContextMenuRadioItemEvents = typeof __propDef.events;
export type ContextMenuRadioItemSlots = typeof __propDef.slots;
export default class ContextMenuRadioItem extends SvelteComponent<ContextMenuRadioItemProps, ContextMenuRadioItemEvents, ContextMenuRadioItemSlots> {
}
export {};
