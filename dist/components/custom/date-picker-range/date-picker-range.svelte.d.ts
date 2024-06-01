import { SvelteComponent } from "svelte";
import type { DateRange } from 'bits-ui';
import { type DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        onValueChange?: ((value: DateRange | undefined) => void) | undefined;
        maxValue?: DateValue | undefined;
        placeholder?: string | undefined;
        formatDate?: ((date: Date) => string) | undefined;
        value?: DateRange | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DatePickerRangeProps = typeof __propDef.props;
export type DatePickerRangeEvents = typeof __propDef.events;
export type DatePickerRangeSlots = typeof __propDef.slots;
export default class DatePickerRange extends SvelteComponent<DatePickerRangeProps, DatePickerRangeEvents, DatePickerRangeSlots> {
}
export {};
