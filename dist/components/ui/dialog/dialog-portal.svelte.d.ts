import { SvelteComponent } from "svelte";
import { Dialog as DialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DialogPrimitive.PortalProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogPortalProps = typeof __propDef.props;
export type DialogPortalEvents = typeof __propDef.events;
export type DialogPortalSlots = typeof __propDef.slots;
export default class DialogPortal extends SvelteComponent<DialogPortalProps, DialogPortalEvents, DialogPortalSlots> {
}
export {};
