import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AlertDialogPrimitive.TitleProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogTitleProps = typeof __propDef.props;
export type AlertDialogTitleEvents = typeof __propDef.events;
export type AlertDialogTitleSlots = typeof __propDef.slots;
export default class AlertDialogTitle extends SvelteComponent<AlertDialogTitleProps, AlertDialogTitleEvents, AlertDialogTitleSlots> {
}
export {};
