import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: RangeCalendarPrimitive.Props;
    slots: {};
    events: RangeCalendarPrimitive.Events;
};
export type RangeCalendarProps = typeof __propDef.props;
export type RangeCalendarEvents = typeof __propDef.events;
export type RangeCalendarSlots = typeof __propDef.slots;
export default class RangeCalendar extends SvelteComponent<RangeCalendarProps, RangeCalendarEvents, RangeCalendarSlots> {
}
export {};
