import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from "bits-ui";
declare const __propDef: {
    props: MenubarPrimitive.ContentProps;
    slots: {
        default: {};
    };
    events: MenubarPrimitive.SubContentEvents;
};
export type MenubarSubContentProps = typeof __propDef.props;
export type MenubarSubContentEvents = typeof __propDef.events;
export type MenubarSubContentSlots = typeof __propDef.slots;
export default class MenubarSubContent extends SvelteComponent<MenubarSubContentProps, MenubarSubContentEvents, MenubarSubContentSlots> {
}
export {};
