import { SvelteComponent } from "svelte";
import { Select as SelectPrimitive } from "bits-ui";
declare const __propDef: {
    props: SelectPrimitive.SeparatorProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SelectSeparatorProps = typeof __propDef.props;
export type SelectSeparatorEvents = typeof __propDef.events;
export type SelectSeparatorSlots = typeof __propDef.slots;
export default class SelectSeparator extends SvelteComponent<SelectSeparatorProps, SelectSeparatorEvents, SelectSeparatorSlots> {
}
export {};
