import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
declare const __propDef: {
    props: AlertDialogPrimitive.DescriptionProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogDescriptionProps = typeof __propDef.props;
export type AlertDialogDescriptionEvents = typeof __propDef.events;
export type AlertDialogDescriptionSlots = typeof __propDef.slots;
export default class AlertDialogDescription extends SvelteComponent<AlertDialogDescriptionProps, AlertDialogDescriptionEvents, AlertDialogDescriptionSlots> {
}
export {};
