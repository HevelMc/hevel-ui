import { SvelteComponent } from "svelte";
import { Select as SelectPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SelectPrimitive.ContentProps;
    slots: {
        default: {};
    };
    events: SelectPrimitive.ContentEvents;
};
export type SelectContentProps = typeof __propDef.props;
export type SelectContentEvents = typeof __propDef.events;
export type SelectContentSlots = typeof __propDef.slots;
export default class SelectContent extends SvelteComponent<SelectContentProps, SelectContentEvents, SelectContentSlots> {
}
export {};
