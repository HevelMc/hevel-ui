import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
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
export type CommandShortcutProps = typeof __propDef.props;
export type CommandShortcutEvents = typeof __propDef.events;
export type CommandShortcutSlots = typeof __propDef.slots;
export default class CommandShortcut extends SvelteComponent<CommandShortcutProps, CommandShortcutEvents, CommandShortcutSlots> {
}
export {};
