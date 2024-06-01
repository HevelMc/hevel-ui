import { SvelteComponent } from "svelte";
import { Select as SelectPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SelectPrimitive.LabelProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SelectLabelProps = typeof __propDef.props;
export type SelectLabelEvents = typeof __propDef.events;
export type SelectLabelSlots = typeof __propDef.slots;
export default class SelectLabel extends SvelteComponent<SelectLabelProps, SelectLabelEvents, SelectLabelSlots> {
}
export {};
