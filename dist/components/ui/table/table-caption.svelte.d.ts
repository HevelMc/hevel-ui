import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLTableCaptionElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TableCaptionProps = typeof __propDef.props;
export type TableCaptionEvents = typeof __propDef.events;
export type TableCaptionSlots = typeof __propDef.slots;
export default class TableCaption extends SvelteComponent<TableCaptionProps, TableCaptionEvents, TableCaptionSlots> {
}
export {};
