import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.GridHeadProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarGridHeadProps = typeof __propDef.props;
export type CalendarGridHeadEvents = typeof __propDef.events;
export type CalendarGridHeadSlots = typeof __propDef.slots;
export default class CalendarGridHead extends SvelteComponent<CalendarGridHeadProps, CalendarGridHeadEvents, CalendarGridHeadSlots> {
}
export {};
