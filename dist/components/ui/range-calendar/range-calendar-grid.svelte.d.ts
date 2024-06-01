import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: RangeCalendarPrimitive.GridProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarGridProps = typeof __propDef.props;
export type RangeCalendarGridEvents = typeof __propDef.events;
export type RangeCalendarGridSlots = typeof __propDef.slots;
export default class RangeCalendarGrid extends SvelteComponent<RangeCalendarGridProps, RangeCalendarGridEvents, RangeCalendarGridSlots> {
}
export {};
