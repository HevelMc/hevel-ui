import { SvelteComponent } from "svelte";
import { Drawer as DrawerPrimitive } from "vaul-svelte";
declare const __propDef: {
    props: DrawerPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DrawerContentProps = typeof __propDef.props;
export type DrawerContentEvents = typeof __propDef.events;
export type DrawerContentSlots = typeof __propDef.slots;
export default class DrawerContent extends SvelteComponent<DrawerContentProps, DrawerContentEvents, DrawerContentSlots> {
}
export {};
