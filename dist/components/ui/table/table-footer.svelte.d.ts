import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
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
export type TableFooterProps = typeof __propDef.props;
export type TableFooterEvents = typeof __propDef.events;
export type TableFooterSlots = typeof __propDef.slots;
export default class TableFooter extends SvelteComponent<TableFooterProps, TableFooterEvents, TableFooterSlots> {
}
export {};
