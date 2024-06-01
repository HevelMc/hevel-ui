import { SvelteComponent } from "svelte";
import { type CarouselProps } from "./context.js";
declare const __propDef: {
    props: CarouselProps;
    events: {
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type CarouselProps_ = typeof __propDef.props;
export { CarouselProps_ as CarouselProps };
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
export default class Carousel extends SvelteComponent<CarouselProps_, CarouselEvents, CarouselSlots> {
}
