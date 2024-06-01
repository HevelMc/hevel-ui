import { SvelteComponent } from "svelte";
import { Checkbox as CheckboxPrimitive } from 'bits-ui';
declare const __propDef: {
    props: CheckboxPrimitive.Props;
    slots: {};
    events: CheckboxPrimitive.Events;
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
