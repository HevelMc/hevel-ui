import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from "cmdk-sv";
declare const __propDef: {
    props: CommandPrimitive.EmptyProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandEmptyProps = typeof __propDef.props;
export type CommandEmptyEvents = typeof __propDef.events;
export type CommandEmptySlots = typeof __propDef.slots;
export default class CommandEmpty extends SvelteComponent<CommandEmptyProps, CommandEmptyEvents, CommandEmptySlots> {
}
export {};
