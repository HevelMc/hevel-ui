import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLParagraphElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CardDescriptionProps = typeof __propDef.props;
export type CardDescriptionEvents = typeof __propDef.events;
export type CardDescriptionSlots = typeof __propDef.slots;
export default class CardDescription extends SvelteComponent<CardDescriptionProps, CardDescriptionEvents, CardDescriptionSlots> {
}
export {};
