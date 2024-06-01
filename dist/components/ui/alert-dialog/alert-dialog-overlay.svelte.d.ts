import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
declare const __propDef: {
    props: AlertDialogPrimitive.OverlayProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogOverlayProps = typeof __propDef.props;
export type AlertDialogOverlayEvents = typeof __propDef.events;
export type AlertDialogOverlaySlots = typeof __propDef.slots;
export default class AlertDialogOverlay extends SvelteComponent<AlertDialogOverlayProps, AlertDialogOverlayEvents, AlertDialogOverlaySlots> {
}
export {};
