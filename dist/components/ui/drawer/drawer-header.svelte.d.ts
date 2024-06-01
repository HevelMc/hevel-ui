import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        el?: HTMLDivElement | undefined;
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
export type DrawerHeaderProps = typeof __propDef.props;
export type DrawerHeaderEvents = typeof __propDef.events;
export type DrawerHeaderSlots = typeof __propDef.slots;
export default class DrawerHeader extends SvelteComponent<DrawerHeaderProps, DrawerHeaderEvents, DrawerHeaderSlots> {
}
export {};
