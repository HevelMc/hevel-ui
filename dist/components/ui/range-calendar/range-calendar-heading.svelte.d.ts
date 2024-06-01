import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: RangeCalendarPrimitive.HeadingProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            headingValue: string;
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RangeCalendarHeadingProps = typeof __propDef.props;
export type RangeCalendarHeadingEvents = typeof __propDef.events;
export type RangeCalendarHeadingSlots = typeof __propDef.slots;
export default class RangeCalendarHeading extends SvelteComponent<RangeCalendarHeadingProps, RangeCalendarHeadingEvents, RangeCalendarHeadingSlots> {
}
export {};
