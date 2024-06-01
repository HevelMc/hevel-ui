import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.HeadCellProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarHeadCellProps = typeof __propDef.props;
export type CalendarHeadCellEvents = typeof __propDef.events;
export type CalendarHeadCellSlots = typeof __propDef.slots;
export default class CalendarHeadCell extends SvelteComponent<CalendarHeadCellProps, CalendarHeadCellEvents, CalendarHeadCellSlots> {
}
export {};
