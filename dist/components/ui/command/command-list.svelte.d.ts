import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from 'cmdk-sv';
declare const __propDef: {
    props: CommandPrimitive.ListProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandListProps = typeof __propDef.props;
export type CommandListEvents = typeof __propDef.events;
export type CommandListSlots = typeof __propDef.slots;
export default class CommandList extends SvelteComponent<CommandListProps, CommandListEvents, CommandListSlots> {
}
export {};
