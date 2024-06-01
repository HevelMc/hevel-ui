import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: RangeCalendarPrimitive.CellProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarCellProps = typeof __propDef.props;
export type RangeCalendarCellEvents = typeof __propDef.events;
export type RangeCalendarCellSlots = typeof __propDef.slots;
export default class RangeCalendarCell extends SvelteComponent<RangeCalendarCellProps, RangeCalendarCellEvents, RangeCalendarCellSlots> {
}
export {};
