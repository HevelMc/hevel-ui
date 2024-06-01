import { SvelteComponent } from "svelte";
import { Drawer as DrawerPrimitive } from 'vaul-svelte';
declare const __propDef: {
    props: DrawerPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponent<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
