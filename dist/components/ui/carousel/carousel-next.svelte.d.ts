import { SvelteComponent } from "svelte";
import { type Props } from '@/components/ui/button/index.js';
declare const __propDef: {
    props: Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CarouselNextProps = typeof __propDef.props;
export type CarouselNextEvents = typeof __propDef.events;
export type CarouselNextSlots = typeof __propDef.slots;
export default class CarouselNext extends SvelteComponent<CarouselNextProps, CarouselNextEvents, CarouselNextSlots> {
}
export {};
