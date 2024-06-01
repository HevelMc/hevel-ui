import { SvelteComponent } from "svelte";
import type { HTMLTdAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLTdAttributes;
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
export type TableCellProps = typeof __propDef.props;
export type TableCellEvents = typeof __propDef.events;
export type TableCellSlots = typeof __propDef.slots;
export default class TableCell extends SvelteComponent<TableCellProps, TableCellEvents, TableCellSlots> {
}
export {};
