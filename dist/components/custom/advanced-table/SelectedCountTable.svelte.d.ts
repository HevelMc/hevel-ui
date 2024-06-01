import { SvelteComponent } from "svelte";
import type { TableViewModel } from 'svelte-headless-table';
import type { AnyPlugins } from 'svelte-headless-table/plugins';
declare const __propDef: {
    props: {
        tableModel: TableViewModel<any, AnyPlugins>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SelectedCountTableProps = typeof __propDef.props;
export type SelectedCountTableEvents = typeof __propDef.events;
export type SelectedCountTableSlots = typeof __propDef.slots;
export default class SelectedCountTable extends SvelteComponent<SelectedCountTableProps, SelectedCountTableEvents, SelectedCountTableSlots> {
}
export {};
