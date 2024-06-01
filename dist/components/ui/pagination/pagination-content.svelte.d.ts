import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLUListElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationContentProps = typeof __propDef.props;
export type PaginationContentEvents = typeof __propDef.events;
export type PaginationContentSlots = typeof __propDef.slots;
export default class PaginationContent extends SvelteComponent<PaginationContentProps, PaginationContentEvents, PaginationContentSlots> {
}
export {};
