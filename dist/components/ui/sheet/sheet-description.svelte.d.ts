import { SvelteComponent } from "svelte";
import { Dialog as SheetPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SheetPrimitive.DescriptionProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SheetDescriptionProps = typeof __propDef.props;
export type SheetDescriptionEvents = typeof __propDef.events;
export type SheetDescriptionSlots = typeof __propDef.slots;
export default class SheetDescription extends SvelteComponent<SheetDescriptionProps, SheetDescriptionEvents, SheetDescriptionSlots> {
}
export {};
