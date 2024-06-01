import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from 'cmdk-sv';
declare const __propDef: {
    props: CommandPrimitive.SeparatorProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandSeparatorProps = typeof __propDef.props;
export type CommandSeparatorEvents = typeof __propDef.events;
export type CommandSeparatorSlots = typeof __propDef.slots;
export default class CommandSeparator extends SvelteComponent<CommandSeparatorProps, CommandSeparatorEvents, CommandSeparatorSlots> {
}
export {};
