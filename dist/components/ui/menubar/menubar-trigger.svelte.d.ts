import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: MenubarPrimitive.TriggerProps;
    slots: {
        default: {};
    };
    events: MenubarPrimitive.TriggerEvents;
};
export type MenubarTriggerProps = typeof __propDef.props;
export type MenubarTriggerEvents = typeof __propDef.events;
export type MenubarTriggerSlots = typeof __propDef.slots;
export default class MenubarTrigger extends SvelteComponent<MenubarTriggerProps, MenubarTriggerEvents, MenubarTriggerSlots> {
}
export {};
