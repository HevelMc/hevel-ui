import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarMonthsProps = typeof __propDef.props;
export type RangeCalendarMonthsEvents = typeof __propDef.events;
export type RangeCalendarMonthsSlots = typeof __propDef.slots;
export default class RangeCalendarMonths extends SvelteComponent<RangeCalendarMonthsProps, RangeCalendarMonthsEvents, RangeCalendarMonthsSlots> {
}
export {};
