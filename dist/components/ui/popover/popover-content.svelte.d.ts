import { SvelteComponent } from "svelte";
import { Popover as PopoverPrimitive } from 'bits-ui';
declare const __propDef: {
    props: PopoverPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PopoverContentProps = typeof __propDef.props;
export type PopoverContentEvents = typeof __propDef.events;
export type PopoverContentSlots = typeof __propDef.slots;
export default class PopoverContent extends SvelteComponent<PopoverContentProps, PopoverContentEvents, PopoverContentSlots> {
}
export {};
