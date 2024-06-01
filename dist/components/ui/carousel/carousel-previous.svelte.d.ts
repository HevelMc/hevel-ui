import { SvelteComponent } from "svelte";
import { type Props } from '../button/index.js';
declare const __propDef: {
    props: Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CarouselPreviousProps = typeof __propDef.props;
export type CarouselPreviousEvents = typeof __propDef.events;
export type CarouselPreviousSlots = typeof __propDef.slots;
export default class CarouselPrevious extends SvelteComponent<CarouselPreviousProps, CarouselPreviousEvents, CarouselPreviousSlots> {
}
export {};
