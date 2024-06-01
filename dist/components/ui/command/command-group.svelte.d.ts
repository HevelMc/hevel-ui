import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from "cmdk-sv";
declare const __propDef: {
    props: CommandPrimitive.GroupProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandGroupProps = typeof __propDef.props;
export type CommandGroupEvents = typeof __propDef.events;
export type CommandGroupSlots = typeof __propDef.slots;
export default class CommandGroup extends SvelteComponent<CommandGroupProps, CommandGroupEvents, CommandGroupSlots> {
}
export {};
