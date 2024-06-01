import { SvelteComponent } from "svelte";
import type { TableViewModel } from 'svelte-headless-table';
import type { AnyPlugins } from 'svelte-headless-table/plugins';
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        tableModel: TableViewModel<any, AnyPlugins>;
        currentPageIndex: Writable<number>;
        currentPageSize: Writable<number>;
        serverItemCount: Writable<number>;
        disablePageSkip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationTableProps = typeof __propDef.props;
export type PaginationTableEvents = typeof __propDef.events;
export type PaginationTableSlots = typeof __propDef.slots;
export default class PaginationTable extends SvelteComponent<PaginationTableProps, PaginationTableEvents, PaginationTableSlots> {
}
export {};
