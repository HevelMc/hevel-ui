import { SvelteComponent } from "svelte";
import { LinkPreview as HoverCardPrimitive } from "bits-ui";
declare const __propDef: {
    props: HoverCardPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type HoverCardContentProps = typeof __propDef.props;
export type HoverCardContentEvents = typeof __propDef.events;
export type HoverCardContentSlots = typeof __propDef.slots;
export default class HoverCardContent extends SvelteComponent<HoverCardContentProps, HoverCardContentEvents, HoverCardContentSlots> {
}
export {};
