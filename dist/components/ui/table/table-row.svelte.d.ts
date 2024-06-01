import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLTableRowElement> & {
        "data-state"?: unknown;
        builders?: unknown;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TableRowProps = typeof __propDef.props;
export type TableRowEvents = typeof __propDef.events;
export type TableRowSlots = typeof __propDef.slots;
export default class TableRow extends SvelteComponent<TableRowProps, TableRowEvents, TableRowSlots> {
}
export {};
