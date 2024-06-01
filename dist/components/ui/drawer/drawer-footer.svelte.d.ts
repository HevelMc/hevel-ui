import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
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
export type DrawerFooterProps = typeof __propDef.props;
export type DrawerFooterEvents = typeof __propDef.events;
export type DrawerFooterSlots = typeof __propDef.slots;
export default class DrawerFooter extends SvelteComponent<DrawerFooterProps, DrawerFooterEvents, DrawerFooterSlots> {
}
export {};
