import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: MenubarPrimitive.RadioItemProps;
    slots: {
        default: {};
    };
    events: MenubarPrimitive.RadioItemEvents;
};
export type MenubarRadioItemProps = typeof __propDef.props;
export type MenubarRadioItemEvents = typeof __propDef.events;
export type MenubarRadioItemSlots = typeof __propDef.slots;
export default class MenubarRadioItem extends SvelteComponent<MenubarRadioItemProps, MenubarRadioItemEvents, MenubarRadioItemSlots> {
}
export {};
