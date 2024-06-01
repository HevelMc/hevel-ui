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
export type CalendarMonthsProps = typeof __propDef.props;
export type CalendarMonthsEvents = typeof __propDef.events;
export type CalendarMonthsSlots = typeof __propDef.slots;
export default class CalendarMonths extends SvelteComponent<CalendarMonthsProps, CalendarMonthsEvents, CalendarMonthsSlots> {
}
export {};
