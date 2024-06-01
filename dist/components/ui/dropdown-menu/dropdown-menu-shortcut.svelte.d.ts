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
export type DropdownMenuShortcutProps = typeof __propDef.props;
export type DropdownMenuShortcutEvents = typeof __propDef.events;
export type DropdownMenuShortcutSlots = typeof __propDef.slots;
export default class DropdownMenuShortcut extends SvelteComponent<DropdownMenuShortcutProps, DropdownMenuShortcutEvents, DropdownMenuShortcutSlots> {
}
export {};
