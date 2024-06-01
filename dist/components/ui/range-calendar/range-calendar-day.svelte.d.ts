import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: RangeCalendarPrimitive.DayProps;
    slots: {
        default: {
            disabled: boolean;
            unavailable: boolean;
            builder: {
                readonly role: "button";
                readonly 'aria-label': string;
                readonly 'aria-selected': true | undefined;
                readonly 'aria-disabled': true | undefined;
                readonly 'data-selected': true | undefined;
                readonly 'data-selection-start': true | undefined;
                readonly 'data-selection-end': true | undefined;
                readonly 'data-value': string;
                readonly 'data-disabled': "" | undefined;
                readonly 'data-unavailable': "" | undefined;
                readonly 'data-today': "" | undefined;
                readonly 'data-outside-month': "" | undefined;
                readonly 'data-outside-visible-months': "" | undefined;
                readonly 'data-focused': "" | undefined;
                readonly 'data-highlighted': "" | undefined;
                readonly tabindex: 0 | -1 | undefined;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<"click" | "mouseenter" | "focusin">;
            };
        };
    };
    events: RangeCalendarPrimitive.DayEvents;
};
export type RangeCalendarDayProps = typeof __propDef.props;
export type RangeCalendarDayEvents = typeof __propDef.events;
export type RangeCalendarDaySlots = typeof __propDef.slots;
export default class RangeCalendarDay extends SvelteComponent<RangeCalendarDayProps, RangeCalendarDayEvents, RangeCalendarDaySlots> {
}
export {};
