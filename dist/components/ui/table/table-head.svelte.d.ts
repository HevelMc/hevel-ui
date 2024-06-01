import { SvelteComponent } from "svelte";
import type { HTMLThAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLThAttributes;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TableHeadProps = typeof __propDef.props;
export type TableHeadEvents = typeof __propDef.events;
export type TableHeadSlots = typeof __propDef.slots;
export default class TableHead extends SvelteComponent<TableHeadProps, TableHeadEvents, TableHeadSlots> {
}
export {};
