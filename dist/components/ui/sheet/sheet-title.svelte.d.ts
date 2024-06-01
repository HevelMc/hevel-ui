import { SvelteComponent } from "svelte";
import { Dialog as SheetPrimitive } from "bits-ui";
declare const __propDef: {
    props: SheetPrimitive.TitleProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SheetTitleProps = typeof __propDef.props;
export type SheetTitleEvents = typeof __propDef.events;
export type SheetTitleSlots = typeof __propDef.slots;
export default class SheetTitle extends SvelteComponent<SheetTitleProps, SheetTitleEvents, SheetTitleSlots> {
}
export {};
