import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: CalendarPrimitive.HeaderProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CalendarHeaderProps = typeof __propDef.props;
export type CalendarHeaderEvents = typeof __propDef.events;
export type CalendarHeaderSlots = typeof __propDef.slots;
export default class CalendarHeader extends SvelteComponent<CalendarHeaderProps, CalendarHeaderEvents, CalendarHeaderSlots> {
}
export {};
