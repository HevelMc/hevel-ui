import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from "cmdk-sv";
declare const __propDef: {
    props: CommandPrimitive.InputProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandInputProps = typeof __propDef.props;
export type CommandInputEvents = typeof __propDef.events;
export type CommandInputSlots = typeof __propDef.slots;
export default class CommandInput extends SvelteComponent<CommandInputProps, CommandInputEvents, CommandInputSlots> {
}
export {};
