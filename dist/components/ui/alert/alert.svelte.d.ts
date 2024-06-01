import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { type Variant } from "./index.js";
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        variant?: Variant;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponent<AlertProps, AlertEvents, AlertSlots> {
}
export {};
