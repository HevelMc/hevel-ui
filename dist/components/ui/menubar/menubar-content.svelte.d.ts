import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from "bits-ui";
declare const __propDef: {
    props: MenubarPrimitive.ContentProps;
    slots: {
        default: {};
    };
    events: MenubarPrimitive.ContentEvents;
};
export type MenubarContentProps = typeof __propDef.props;
export type MenubarContentEvents = typeof __propDef.events;
export type MenubarContentSlots = typeof __propDef.slots;
export default class MenubarContent extends SvelteComponent<MenubarContentProps, MenubarContentEvents, MenubarContentSlots> {
}
export {};
