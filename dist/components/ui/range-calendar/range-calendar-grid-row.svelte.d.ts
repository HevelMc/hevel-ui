import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: RangeCalendarPrimitive.GridRowProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarGridRowProps = typeof __propDef.props;
export type RangeCalendarGridRowEvents = typeof __propDef.events;
export type RangeCalendarGridRowSlots = typeof __propDef.slots;
export default class RangeCalendarGridRow extends SvelteComponent<RangeCalendarGridRowProps, RangeCalendarGridRowEvents, RangeCalendarGridRowSlots> {
}
export {};
