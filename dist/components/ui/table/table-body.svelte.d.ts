import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLTableSectionElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TableBodyProps = typeof __propDef.props;
export type TableBodyEvents = typeof __propDef.events;
export type TableBodySlots = typeof __propDef.slots;
export default class TableBody extends SvelteComponent<TableBodyProps, TableBodyEvents, TableBodySlots> {
}
export {};
