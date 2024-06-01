import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AlertDialogPrimitive.ActionProps;
    slots: {
        default: {
            builder: {
                readonly type: "button";
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<"click" | "keydown">;
            };
        };
    };
    events: AlertDialogPrimitive.ActionEvents;
};
export type AlertDialogActionProps = typeof __propDef.props;
export type AlertDialogActionEvents = typeof __propDef.events;
export type AlertDialogActionSlots = typeof __propDef.slots;
export default class AlertDialogAction extends SvelteComponent<AlertDialogActionProps, AlertDialogActionEvents, AlertDialogActionSlots> {
}
export {};
