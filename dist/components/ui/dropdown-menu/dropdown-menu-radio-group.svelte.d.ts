import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DropdownMenuPrimitive.RadioGroupProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownMenuRadioGroupProps = typeof __propDef.props;
export type DropdownMenuRadioGroupEvents = typeof __propDef.events;
export type DropdownMenuRadioGroupSlots = typeof __propDef.slots;
export default class DropdownMenuRadioGroup extends SvelteComponent<DropdownMenuRadioGroupProps, DropdownMenuRadioGroupEvents, DropdownMenuRadioGroupSlots> {
}
export {};
