import { SvelteComponent } from "svelte";
import { Pagination as PaginationPrimitive } from "bits-ui";
declare const __propDef: {
    props: PaginationPrimitive.NextButtonProps;
    slots: {
        default: {};
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
    };
};
export type PaginationNextButtonProps = typeof __propDef.props;
export type PaginationNextButtonEvents = typeof __propDef.events;
export type PaginationNextButtonSlots = typeof __propDef.slots;
export default class PaginationNextButton extends SvelteComponent<PaginationNextButtonProps, PaginationNextButtonEvents, PaginationNextButtonSlots> {
}
export {};
