import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AlertDialogPrimitive.PortalProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogPortalProps = typeof __propDef.props;
export type AlertDialogPortalEvents = typeof __propDef.events;
export type AlertDialogPortalSlots = typeof __propDef.slots;
export default class AlertDialogPortal extends SvelteComponent<AlertDialogPortalProps, AlertDialogPortalEvents, AlertDialogPortalSlots> {
}
export {};
