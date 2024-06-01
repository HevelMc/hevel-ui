import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.GridBodyProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarGridBodyProps = typeof __propDef.props;
export type CalendarGridBodyEvents = typeof __propDef.events;
export type CalendarGridBodySlots = typeof __propDef.slots;
export default class CalendarGridBody extends SvelteComponent<CalendarGridBodyProps, CalendarGridBodyEvents, CalendarGridBodySlots> {
}
export {};
