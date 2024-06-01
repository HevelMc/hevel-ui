import { SvelteComponent } from "svelte";
import { Accordion as AccordionPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AccordionPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AccordionContentProps = typeof __propDef.props;
export type AccordionContentEvents = typeof __propDef.events;
export type AccordionContentSlots = typeof __propDef.slots;
export default class AccordionContent extends SvelteComponent<AccordionContentProps, AccordionContentEvents, AccordionContentSlots> {
}
export {};
