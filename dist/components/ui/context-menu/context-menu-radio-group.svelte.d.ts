import { SvelteComponent } from "svelte";
import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: ContextMenuPrimitive.RadioGroupProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ContextMenuRadioGroupProps = typeof __propDef.props;
export type ContextMenuRadioGroupEvents = typeof __propDef.events;
export type ContextMenuRadioGroupSlots = typeof __propDef.slots;
export default class ContextMenuRadioGroup extends SvelteComponent<ContextMenuRadioGroupProps, ContextMenuRadioGroupEvents, ContextMenuRadioGroupSlots> {
}
export {};
