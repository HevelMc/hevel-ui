import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.Props;
    slots: {};
    events: CalendarPrimitive.Events;
};
export type CalendarProps = typeof __propDef.props;
export type CalendarEvents = typeof __propDef.events;
export type CalendarSlots = typeof __propDef.slots;
export default class Calendar extends SvelteComponent<CalendarProps, CalendarEvents, CalendarSlots> {
}
export {};
