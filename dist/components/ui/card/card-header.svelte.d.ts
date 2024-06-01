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
export type CardHeaderProps = typeof __propDef.props;
export type CardHeaderEvents = typeof __propDef.events;
export type CardHeaderSlots = typeof __propDef.slots;
export default class CardHeader extends SvelteComponent<CardHeaderProps, CardHeaderEvents, CardHeaderSlots> {
}
export {};
