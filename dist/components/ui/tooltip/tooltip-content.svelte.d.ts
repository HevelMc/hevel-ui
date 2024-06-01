import { SvelteComponent } from "svelte";
import { Tooltip as TooltipPrimitive } from 'bits-ui';
declare const __propDef: {
    props: TooltipPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TooltipContentProps = typeof __propDef.props;
export type TooltipContentEvents = typeof __propDef.events;
export type TooltipContentSlots = typeof __propDef.slots;
export default class TooltipContent extends SvelteComponent<TooltipContentProps, TooltipContentEvents, TooltipContentSlots> {
}
export {};
