import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLSpanElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationEllipsisProps = typeof __propDef.props;
export type PaginationEllipsisEvents = typeof __propDef.events;
export type PaginationEllipsisSlots = typeof __propDef.slots;
export default class PaginationEllipsis extends SvelteComponent<PaginationEllipsisProps, PaginationEllipsisEvents, PaginationEllipsisSlots> {
}
export {};
