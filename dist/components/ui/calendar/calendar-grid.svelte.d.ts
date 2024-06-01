import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.GridProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarGridProps = typeof __propDef.props;
export type CalendarGridEvents = typeof __propDef.events;
export type CalendarGridSlots = typeof __propDef.slots;
export default class CalendarGrid extends SvelteComponent<CalendarGridProps, CalendarGridEvents, CalendarGridSlots> {
}
export {};
