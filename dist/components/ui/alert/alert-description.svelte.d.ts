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
export type AlertDescriptionProps = typeof __propDef.props;
export type AlertDescriptionEvents = typeof __propDef.events;
export type AlertDescriptionSlots = typeof __propDef.slots;
export default class AlertDescription extends SvelteComponent<AlertDescriptionProps, AlertDescriptionEvents, AlertDescriptionSlots> {
}
export {};
