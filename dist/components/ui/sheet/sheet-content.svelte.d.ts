import { SvelteComponent } from "svelte";
import { type Side } from "./index.js";
declare const __propDef: {
    props: {
        transition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
        transitionConfig?: any;
        inTransition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
        inTransitionConfig?: any;
        outTransition?: import("bits-ui/dist/internal/types.js").Transition | undefined;
        outTransitionConfig?: any;
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("bits-ui/dist/internal/types.js").HTMLDivAttributes & {
        side?: Side;
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
export type SheetContentProps = typeof __propDef.props;
export type SheetContentEvents = typeof __propDef.events;
export type SheetContentSlots = typeof __propDef.slots;
export default class SheetContent extends SvelteComponent<SheetContentProps, SheetContentEvents, SheetContentSlots> {
}
export {};
