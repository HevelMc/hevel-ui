import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("bits-ui/dist/internal").HTMLDivAttributes & {
        inset?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: MenubarPrimitive.SubTriggerEvents;
};
export type MenubarSubTriggerProps = typeof __propDef.props;
export type MenubarSubTriggerEvents = typeof __propDef.events;
export type MenubarSubTriggerSlots = typeof __propDef.slots;
export default class MenubarSubTrigger extends SvelteComponent<MenubarSubTriggerProps, MenubarSubTriggerEvents, MenubarSubTriggerSlots> {
}
export {};
