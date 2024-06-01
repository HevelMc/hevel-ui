import { SvelteComponent } from "svelte";
import { Menubar as MenubarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: MenubarPrimitive.SeparatorProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MenubarSeparatorProps = typeof __propDef.props;
export type MenubarSeparatorEvents = typeof __propDef.events;
export type MenubarSeparatorSlots = typeof __propDef.slots;
export default class MenubarSeparator extends SvelteComponent<MenubarSeparatorProps, MenubarSeparatorEvents, MenubarSeparatorSlots> {
}
export {};
