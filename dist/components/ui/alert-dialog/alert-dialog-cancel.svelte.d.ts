import { SvelteComponent } from "svelte";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
declare const __propDef: {
    props: AlertDialogPrimitive.CancelProps;
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
    events: AlertDialogPrimitive.CancelEvents;
};
export type AlertDialogCancelProps = typeof __propDef.props;
export type AlertDialogCancelEvents = typeof __propDef.events;
export type AlertDialogCancelSlots = typeof __propDef.slots;
export default class AlertDialogCancel extends SvelteComponent<AlertDialogCancelProps, AlertDialogCancelEvents, AlertDialogCancelSlots> {
}
export {};
