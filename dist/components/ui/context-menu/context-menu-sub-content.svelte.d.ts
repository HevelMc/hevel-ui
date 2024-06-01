import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
declare const __propDef: {
    props: ContextMenuPrimitive.SubContentProps;
    events: {
        keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
        focusout: import("bits-ui").CustomEventHandler<FocusEvent, HTMLDivElement>;
        pointermove: import("bits-ui").CustomEventHandler<PointerEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ContextMenuSubContentProps = typeof __propDef.props;
export type ContextMenuSubContentEvents = typeof __propDef.events;
export type ContextMenuSubContentSlots = typeof __propDef.slots;
export default class ContextMenuSubContent extends SvelteComponent<ContextMenuSubContentProps, ContextMenuSubContentEvents, ContextMenuSubContentSlots> {
}
export {};
