import { SvelteComponent } from "svelte";
import { Dialog as SheetPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SheetPrimitive.PortalProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SheetPortalProps = typeof __propDef.props;
export type SheetPortalEvents = typeof __propDef.events;
export type SheetPortalSlots = typeof __propDef.slots;
export default class SheetPortal extends SvelteComponent<SheetPortalProps, SheetPortalEvents, SheetPortalSlots> {
}
export {};
