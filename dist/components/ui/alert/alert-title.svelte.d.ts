import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { HeadingLevel } from "./index.js";
declare const __propDef: {
    props: HTMLAttributes<HTMLHeadingElement> & {
        level?: HeadingLevel | undefined;
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
export type AlertTitleProps = typeof __propDef.props;
export type AlertTitleEvents = typeof __propDef.events;
export type AlertTitleSlots = typeof __propDef.slots;
export default class AlertTitle extends SvelteComponent<AlertTitleProps, AlertTitleEvents, AlertTitleSlots> {
}
export {};
