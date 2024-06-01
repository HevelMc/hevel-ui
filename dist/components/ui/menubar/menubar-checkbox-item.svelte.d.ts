import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: MenubarPrimitive.CheckboxItemProps;
    slots: {
        default: {};
    };
    events: MenubarPrimitive.CheckboxItemEvents;
};
export type MenubarCheckboxItemProps = typeof __propDef.props;
export type MenubarCheckboxItemEvents = typeof __propDef.events;
export type MenubarCheckboxItemSlots = typeof __propDef.slots;
export default class MenubarCheckboxItem extends SvelteComponent<MenubarCheckboxItemProps, MenubarCheckboxItemEvents, MenubarCheckboxItemSlots> {
}
export {};
