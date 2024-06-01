import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertDialogHeaderProps = typeof __propDef.props;
export type AlertDialogHeaderEvents = typeof __propDef.events;
export type AlertDialogHeaderSlots = typeof __propDef.slots;
export default class AlertDialogHeader extends SvelteComponent<AlertDialogHeaderProps, AlertDialogHeaderEvents, AlertDialogHeaderSlots> {
}
export {};
