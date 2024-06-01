import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLSpanElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MenubarShortcutProps = typeof __propDef.props;
export type MenubarShortcutEvents = typeof __propDef.events;
export type MenubarShortcutSlots = typeof __propDef.slots;
export default class MenubarShortcut extends SvelteComponent<MenubarShortcutProps, MenubarShortcutEvents, MenubarShortcutSlots> {
}
export {};
