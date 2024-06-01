import { SvelteComponent } from "svelte";
import { type DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        onValueChange?: ((value: DateValue | undefined) => void) | undefined;
        value?: DateValue | undefined;
        maxValue?: DateValue | undefined;
        minValue?: DateValue | undefined;
        disabled?: boolean | undefined;
        placeholder?: string | undefined;
        formatDate?: ((date: Date) => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DatePickerProps = typeof __propDef.props;
export type DatePickerEvents = typeof __propDef.events;
export type DatePickerSlots = typeof __propDef.slots;
export default class DatePicker extends SvelteComponent<DatePickerProps, DatePickerEvents, DatePickerSlots> {
}
export {};
