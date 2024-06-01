import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLLIElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationItemProps = typeof __propDef.props;
export type PaginationItemEvents = typeof __propDef.events;
export type PaginationItemSlots = typeof __propDef.slots;
export default class PaginationItem extends SvelteComponent<PaginationItemProps, PaginationItemEvents, PaginationItemSlots> {
}
export {};
