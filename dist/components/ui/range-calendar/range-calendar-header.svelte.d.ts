import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: RangeCalendarPrimitive.HeaderProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarHeaderProps = typeof __propDef.props;
export type RangeCalendarHeaderEvents = typeof __propDef.events;
export type RangeCalendarHeaderSlots = typeof __propDef.slots;
export default class RangeCalendarHeader extends SvelteComponent<RangeCalendarHeaderProps, RangeCalendarHeaderEvents, RangeCalendarHeaderSlots> {
}
export {};
