import { SvelteComponent } from "svelte";
import { Label as LabelPrimitive } from 'bits-ui';
declare const __propDef: {
    props: LabelPrimitive.Props;
    slots: {
        default: {};
    };
    events: LabelPrimitive.Events;
};
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
export default class Label extends SvelteComponent<LabelProps, LabelEvents, LabelSlots> {
}
export {};
