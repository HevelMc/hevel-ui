import { SvelteComponent } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        selectPlaceholder?: string | undefined;
        noItemPlaceholder?: string | undefined;
        data?: {
            value: string;
            label: string;
        }[] | undefined;
        selectedValue?: Writable<String> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ComboBoxTableProps = typeof __propDef.props;
export type ComboBoxTableEvents = typeof __propDef.events;
export type ComboBoxTableSlots = typeof __propDef.slots;
export default class ComboBoxTable extends SvelteComponent<ComboBoxTableProps, ComboBoxTableEvents, ComboBoxTableSlots> {
}
export {};
