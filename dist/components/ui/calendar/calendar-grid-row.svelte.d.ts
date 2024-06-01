import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: CalendarPrimitive.GridRowProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarGridRowProps = typeof __propDef.props;
export type CalendarGridRowEvents = typeof __propDef.events;
export type CalendarGridRowSlots = typeof __propDef.slots;
export default class CalendarGridRow extends SvelteComponent<CalendarGridRowProps, CalendarGridRowEvents, CalendarGridRowSlots> {
}
export {};
