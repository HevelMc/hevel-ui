import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: CalendarPrimitive.CellProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarCellProps = typeof __propDef.props;
export type CalendarCellEvents = typeof __propDef.events;
export type CalendarCellSlots = typeof __propDef.slots;
export default class CalendarCell extends SvelteComponent<CalendarCellProps, CalendarCellEvents, CalendarCellSlots> {
}
export {};
