import { SvelteComponent } from "svelte";
import { Accordion as AccordionPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AccordionPrimitive.TriggerProps;
    slots: {
        default: {};
    };
    events: AccordionPrimitive.TriggerEvents;
};
export type AccordionTriggerProps = typeof __propDef.props;
export type AccordionTriggerEvents = typeof __propDef.events;
export type AccordionTriggerSlots = typeof __propDef.slots;
export default class AccordionTrigger extends SvelteComponent<AccordionTriggerProps, AccordionTriggerEvents, AccordionTriggerSlots> {
}
export {};
