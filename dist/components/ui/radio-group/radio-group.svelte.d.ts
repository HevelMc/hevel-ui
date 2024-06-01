import { SvelteComponent } from "svelte";
import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
declare const __propDef: {
    props: RadioGroupPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RadioGroupProps = typeof __propDef.props;
export type RadioGroupEvents = typeof __propDef.events;
export type RadioGroupSlots = typeof __propDef.slots;
export default class RadioGroup extends SvelteComponent<RadioGroupProps, RadioGroupEvents, RadioGroupSlots> {
}
export {};
