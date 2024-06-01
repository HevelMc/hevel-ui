import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: ContextMenuPrimitive.SeparatorProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ContextMenuSeparatorProps = typeof __propDef.props;
export type ContextMenuSeparatorEvents = typeof __propDef.events;
export type ContextMenuSeparatorSlots = typeof __propDef.slots;
export default class ContextMenuSeparator extends SvelteComponent<ContextMenuSeparatorProps, ContextMenuSeparatorEvents, ContextMenuSeparatorSlots> {
}
export {};
