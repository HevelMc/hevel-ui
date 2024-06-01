import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from "bits-ui";
declare const __propDef: {
    props: MenubarPrimitive.ItemProps & {
        inset?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: MenubarPrimitive.ItemEvents;
};
export type MenubarItemProps = typeof __propDef.props;
export type MenubarItemEvents = typeof __propDef.events;
export type MenubarItemSlots = typeof __propDef.slots;
export default class MenubarItem extends SvelteComponent<MenubarItemProps, MenubarItemEvents, MenubarItemSlots> {
}
export {};
