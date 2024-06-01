import { SvelteComponent } from "svelte";
import { type Month } from './index.js';
declare const __propDef: {
    props: {
        onValueChange?: ((value: Month | undefined) => void) | undefined;
        value?: Month | undefined;
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
export type MonthPickerProps = typeof __propDef.props;
export type MonthPickerEvents = typeof __propDef.events;
export type MonthPickerSlots = typeof __propDef.slots;
export default class MonthPicker extends SvelteComponent<MonthPickerProps, MonthPickerEvents, MonthPickerSlots> {
}
export {};
