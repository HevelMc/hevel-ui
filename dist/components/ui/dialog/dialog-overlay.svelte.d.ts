import { SvelteComponent } from "svelte";
import { Dialog as DialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DialogPrimitive.OverlayProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogOverlayProps = typeof __propDef.props;
export type DialogOverlayEvents = typeof __propDef.events;
export type DialogOverlaySlots = typeof __propDef.slots;
export default class DialogOverlay extends SvelteComponent<DialogOverlayProps, DialogOverlayEvents, DialogOverlaySlots> {
}
export {};
