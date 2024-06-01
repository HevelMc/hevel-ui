import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: CalendarPrimitive.DayProps;
    slots: {
        default: {
            selected: boolean;
            disabled: boolean;
            unavailable: boolean | undefined;
            builder: {
                readonly role: "button";
                readonly 'aria-label': string;
                readonly 'aria-selected': true | undefined;
                readonly 'aria-disabled': true | undefined;
                readonly 'data-selected': true | undefined;
                readonly 'data-value': string;
                readonly 'data-disabled': "" | undefined;
                readonly 'data-unavailable': "" | undefined;
                readonly 'data-today': "" | undefined;
                readonly 'data-outside-month': "" | undefined;
                readonly 'data-outside-visible-months': "" | undefined;
                readonly 'data-focused': "" | undefined;
                readonly tabindex: 0 | -1 | undefined;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
            };
        };
    };
    events: CalendarPrimitive.DayEvents;
};
export type CalendarDayProps = typeof __propDef.props;
export type CalendarDayEvents = typeof __propDef.events;
export type CalendarDaySlots = typeof __propDef.slots;
export default class CalendarDay extends SvelteComponent<CalendarDayProps, CalendarDayEvents, CalendarDaySlots> {
}
export {};
