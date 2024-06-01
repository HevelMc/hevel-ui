import { SvelteComponent } from "svelte";
import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
declare const __propDef: {
    props: RadioGroupPrimitive.ItemProps;
    slots: {};
    events: RadioGroupPrimitive.ItemEvents;
};
export type RadioGroupItemProps = typeof __propDef.props;
export type RadioGroupItemEvents = typeof __propDef.events;
export type RadioGroupItemSlots = typeof __propDef.slots;
export default class RadioGroupItem extends SvelteComponent<RadioGroupItemProps, RadioGroupItemEvents, RadioGroupItemSlots> {
}
export {};
