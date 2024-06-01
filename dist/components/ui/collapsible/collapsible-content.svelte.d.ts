import { SvelteComponent } from "svelte";
import { Collapsible as CollapsiblePrimitive } from "bits-ui";
declare const __propDef: {
    props: CollapsiblePrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CollapsibleContentProps = typeof __propDef.props;
export type CollapsibleContentEvents = typeof __propDef.events;
export type CollapsibleContentSlots = typeof __propDef.slots;
export default class CollapsibleContent extends SvelteComponent<CollapsibleContentProps, CollapsibleContentEvents, CollapsibleContentSlots> {
}
export {};
