import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: ContextMenuPrimitive.ItemProps & {
        inset?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: ContextMenuPrimitive.ItemEvents;
};
export type ContextMenuItemProps = typeof __propDef.props;
export type ContextMenuItemEvents = typeof __propDef.events;
export type ContextMenuItemSlots = typeof __propDef.slots;
export default class ContextMenuItem extends SvelteComponent<ContextMenuItemProps, ContextMenuItemEvents, ContextMenuItemSlots> {
}
export {};
