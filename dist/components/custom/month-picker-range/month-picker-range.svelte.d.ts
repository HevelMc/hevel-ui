import { SvelteComponent } from "svelte";
import { type Month } from '../month-picker/index.js';
declare const __propDef: {
    props: {
        onValueChange?: ((value: Month[] | undefined) => void) | undefined;
        value?: Month[] | undefined;
        maxValue?: Month | undefined;
        minValue?: Month | undefined;
        disabled?: boolean | undefined;
        placeholder?: string | undefined;
        locale?: Intl.LocalesArgument | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MonthPickerRangeProps = typeof __propDef.props;
export type MonthPickerRangeEvents = typeof __propDef.events;
export type MonthPickerRangeSlots = typeof __propDef.slots;
export default class MonthPickerRange extends SvelteComponent<MonthPickerRangeProps, MonthPickerRangeEvents, MonthPickerRangeSlots> {
}
export {};
