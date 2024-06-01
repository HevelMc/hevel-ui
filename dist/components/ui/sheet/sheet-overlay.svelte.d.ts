import { SvelteComponent } from "svelte";
import { Dialog as SheetPrimitive } from "bits-ui";
declare const __propDef: {
    props: SheetPrimitive.OverlayProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SheetOverlayProps = typeof __propDef.props;
export type SheetOverlayEvents = typeof __propDef.events;
export type SheetOverlaySlots = typeof __propDef.slots;
export default class SheetOverlay extends SvelteComponent<SheetOverlayProps, SheetOverlayEvents, SheetOverlaySlots> {
}
export {};
