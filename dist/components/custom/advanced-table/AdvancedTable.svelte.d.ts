import { SvelteComponent } from "svelte";
import { type getDataFunction, type Column } from './index.js';
declare const __propDef: {
    props: {
        columns: Column[];
        getData: getDataFunction;
        pagination?: boolean | undefined;
        disablePageSkip?: boolean | undefined;
        selectable?: boolean | undefined;
        searchable?: boolean | undefined;
        filterable?: boolean | undefined;
        sortable?: boolean | undefined;
        initialPageSize?: number | undefined;
        searchPlaceholder?: string | undefined;
        dropdownTitle?: string | undefined;
        dropdownList?: {
            value: string;
            label: string;
        }[] | undefined;
        initialSortKeys?: {
            id: string;
            order: 'asc' | 'desc';
        }[] | undefined;
        onDialogChange?: ((value: boolean) => void) | undefined;
        triggerResync?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        actions: {};
        filter: {};
        dialog: {
            data: any;
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AdvancedTableProps = typeof __propDef.props;
export type AdvancedTableEvents = typeof __propDef.events;
export type AdvancedTableSlots = typeof __propDef.slots;
export default class AdvancedTable extends SvelteComponent<AdvancedTableProps, AdvancedTableEvents, AdvancedTableSlots> {
    get triggerResync(): () => void;
}
export {};
