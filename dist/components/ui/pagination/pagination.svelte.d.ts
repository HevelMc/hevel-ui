import { SvelteComponent } from "svelte";
import { Pagination as PaginationPrimitive } from 'bits-ui';
declare const __propDef: {
    props: PaginationPrimitive.Props;
    slots: {
        default: {
            pages: any[];
            range: {
                start: number;
                end: number;
            };
            currentPage: number | undefined;
        };
    };
    events: PaginationPrimitive.Events;
};
export type PaginationProps = typeof __propDef.props;
export type PaginationEvents = typeof __propDef.events;
export type PaginationSlots = typeof __propDef.slots;
export default class Pagination extends SvelteComponent<PaginationProps, PaginationEvents, PaginationSlots> {
}
export {};
