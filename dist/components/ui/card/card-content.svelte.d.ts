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
export type CardContentProps = typeof __propDef.props;
export type CardContentEvents = typeof __propDef.events;
export type CardContentSlots = typeof __propDef.slots;
export default class CardContent extends SvelteComponent<CardContentProps, CardContentEvents, CardContentSlots> {
}
export {};
