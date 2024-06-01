import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.HeadingProps;
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
export type CalendarHeadingProps = typeof __propDef.props;
export type CalendarHeadingEvents = typeof __propDef.events;
export type CalendarHeadingSlots = typeof __propDef.slots;
export default class CalendarHeading extends SvelteComponent<CalendarHeadingProps, CalendarHeadingEvents, CalendarHeadingSlots> {
}
export {};
