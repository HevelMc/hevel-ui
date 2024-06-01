import { SvelteComponent } from "svelte";
import { Drawer as DrawerPrimitive } from "vaul-svelte";
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
export type DrawerNestedProps = typeof __propDef.props;
export type DrawerNestedEvents = typeof __propDef.events;
export type DrawerNestedSlots = typeof __propDef.slots;
export default class DrawerNested extends SvelteComponent<DrawerNestedProps, DrawerNestedEvents, DrawerNestedSlots> {
}
export {};
