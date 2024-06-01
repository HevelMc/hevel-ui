import { SvelteComponent } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        checked: Writable<boolean>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CheckBoxTableProps = typeof __propDef.props;
export type CheckBoxTableEvents = typeof __propDef.events;
export type CheckBoxTableSlots = typeof __propDef.slots;
export default class CheckBoxTable extends SvelteComponent<CheckBoxTableProps, CheckBoxTableEvents, CheckBoxTableSlots> {
}
export {};
