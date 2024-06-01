import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from 'cmdk-sv';
declare const __propDef: {
    props: CommandPrimitive.CommandProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type CommandProps_ = typeof __propDef.props;
export { CommandProps_ as CommandProps };
export type CommandEvents = typeof __propDef.events;
export type CommandSlots = typeof __propDef.slots;
export default class Command extends SvelteComponent<CommandProps_, CommandEvents, CommandSlots> {
}
