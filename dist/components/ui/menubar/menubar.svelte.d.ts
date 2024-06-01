import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: MenubarPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MenubarProps = typeof __propDef.props;
export type MenubarEvents = typeof __propDef.events;
export type MenubarSlots = typeof __propDef.slots;
export default class Menubar extends SvelteComponent<MenubarProps, MenubarEvents, MenubarSlots> {
}
export {};
