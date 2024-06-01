import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        onDraggingChange?: import("paneforge/dist/internal/types").PaneResizeHandleOnDragging | undefined;
        tabIndex?: number | undefined;
        el?: HTMLElement | null | undefined;
    } & import("svelte/elements").HTMLAttributes<HTMLDivElement> & {
        withHandle?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ResizableHandleProps = typeof __propDef.props;
export type ResizableHandleEvents = typeof __propDef.events;
export type ResizableHandleSlots = typeof __propDef.slots;
export default class ResizableHandle extends SvelteComponent<ResizableHandleProps, ResizableHandleEvents, ResizableHandleSlots> {
}
export {};
