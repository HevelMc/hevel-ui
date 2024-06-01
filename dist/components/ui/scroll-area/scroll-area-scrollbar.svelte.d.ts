import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & {
        orientation: "horizontal" | "vertical";
    } & import("bits-ui/dist/internal").HTMLDivAttributes & {
        orientation?: "horizontal" | "vertical" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ScrollAreaScrollbarProps = typeof __propDef.props;
export type ScrollAreaScrollbarEvents = typeof __propDef.events;
export type ScrollAreaScrollbarSlots = typeof __propDef.slots;
export default class ScrollAreaScrollbar extends SvelteComponent<ScrollAreaScrollbarProps, ScrollAreaScrollbarEvents, ScrollAreaScrollbarSlots> {
}
export {};
