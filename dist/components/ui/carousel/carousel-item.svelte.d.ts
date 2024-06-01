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
export type CarouselItemProps = typeof __propDef.props;
export type CarouselItemEvents = typeof __propDef.events;
export type CarouselItemSlots = typeof __propDef.slots;
export default class CarouselItem extends SvelteComponent<CarouselItemProps, CarouselItemEvents, CarouselItemSlots> {
}
export {};
