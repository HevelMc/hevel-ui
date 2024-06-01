import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: ContextMenuPrimitive.ContentProps;
    events: {
        keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ContextMenuContentProps = typeof __propDef.props;
export type ContextMenuContentEvents = typeof __propDef.events;
export type ContextMenuContentSlots = typeof __propDef.slots;
export default class ContextMenuContent extends SvelteComponent<ContextMenuContentProps, ContextMenuContentEvents, ContextMenuContentSlots> {
}
export {};
