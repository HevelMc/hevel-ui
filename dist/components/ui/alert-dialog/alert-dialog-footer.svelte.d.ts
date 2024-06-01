import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
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
export type AlertDialogFooterProps = typeof __propDef.props;
export type AlertDialogFooterEvents = typeof __propDef.events;
export type AlertDialogFooterSlots = typeof __propDef.slots;
export default class AlertDialogFooter extends SvelteComponent<AlertDialogFooterProps, AlertDialogFooterEvents, AlertDialogFooterSlots> {
}
export {};
