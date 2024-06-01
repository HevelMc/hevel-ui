import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AlertDialogPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogContentProps = typeof __propDef.props;
export type AlertDialogContentEvents = typeof __propDef.events;
export type AlertDialogContentSlots = typeof __propDef.slots;
export default class AlertDialogContent extends SvelteComponent<AlertDialogContentProps, AlertDialogContentEvents, AlertDialogContentSlots> {
}
export {};
