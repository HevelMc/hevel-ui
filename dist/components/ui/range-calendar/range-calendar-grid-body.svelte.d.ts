import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: RangeCalendarPrimitive.GridBodyProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarGridBodyProps = typeof __propDef.props;
export type RangeCalendarGridBodyEvents = typeof __propDef.events;
export type RangeCalendarGridBodySlots = typeof __propDef.slots;
export default class RangeCalendarGridBody extends SvelteComponent<RangeCalendarGridBodyProps, RangeCalendarGridBodyEvents, RangeCalendarGridBodySlots> {
}
export {};
