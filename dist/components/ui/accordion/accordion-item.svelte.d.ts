import { SvelteComponent } from "svelte";
import { Accordion as AccordionPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AccordionPrimitive.ItemProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponent<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
