import { SvelteComponent } from "svelte";
import { Drawer as DrawerPrimitive } from 'vaul-svelte';
declare const __propDef: {
    props: DrawerPrimitive.OverlayProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DrawerOverlayProps = typeof __propDef.props;
export type DrawerOverlayEvents = typeof __propDef.events;
export type DrawerOverlaySlots = typeof __propDef.slots;
export default class DrawerOverlay extends SvelteComponent<DrawerOverlayProps, DrawerOverlayEvents, DrawerOverlaySlots> {
}
export {};
