import { SvelteComponent } from "svelte";
import { Select as SelectPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SelectPrimitive.ItemProps;
    slots: {
        default: {};
    };
    events: SelectPrimitive.ItemEvents;
};
export type SelectItemProps = typeof __propDef.props;
export type SelectItemEvents = typeof __propDef.events;
export type SelectItemSlots = typeof __propDef.slots;
export default class SelectItem extends SvelteComponent<SelectItemProps, SelectItemEvents, SelectItemSlots> {
}
export {};
