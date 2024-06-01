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
export type CarouselContentProps = typeof __propDef.props;
export type CarouselContentEvents = typeof __propDef.events;
export type CarouselContentSlots = typeof __propDef.slots;
export default class CarouselContent extends SvelteComponent<CarouselContentProps, CarouselContentEvents, CarouselContentSlots> {
}
export {};
