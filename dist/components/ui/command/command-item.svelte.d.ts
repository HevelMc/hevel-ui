import { SvelteComponent } from "svelte";
import { Command as CommandPrimitive } from "cmdk-sv";
declare const __propDef: {
    props: CommandPrimitive.ItemProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            action: (node: HTMLElement) => {
                destroy(): void;
            };
            attrs: {
                'aria-disabled': boolean | undefined;
                'aria-selected': boolean | undefined;
                'data-disabled': boolean | undefined;
                'data-selected': boolean | undefined;
                'data-cmdk-item': string;
                'data-value': string;
                role: string;
                id: string;
            };
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CommandItemProps = typeof __propDef.props;
export type CommandItemEvents = typeof __propDef.events;
export type CommandItemSlots = typeof __propDef.slots;
export default class CommandItem extends SvelteComponent<CommandItemProps, CommandItemEvents, CommandItemSlots> {
}
export {};
