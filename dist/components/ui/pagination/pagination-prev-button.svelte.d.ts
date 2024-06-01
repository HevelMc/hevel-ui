import { SvelteComponent } from "svelte";
import { Pagination as PaginationPrimitive } from 'bits-ui';
declare const __propDef: {
    props: PaginationPrimitive.PrevButtonProps;
    slots: {
        default: {};
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
    };
};
export type PaginationPrevButtonProps = typeof __propDef.props;
export type PaginationPrevButtonEvents = typeof __propDef.events;
export type PaginationPrevButtonSlots = typeof __propDef.slots;
export default class PaginationPrevButton extends SvelteComponent<PaginationPrevButtonProps, PaginationPrevButtonEvents, PaginationPrevButtonSlots> {
}
export {};
