import { SvelteComponent } from "svelte";
import { Dialog as DialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DialogPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogContentProps = typeof __propDef.props;
export type DialogContentEvents = typeof __propDef.events;
export type DialogContentSlots = typeof __propDef.slots;
export default class DialogContent extends SvelteComponent<DialogContentProps, DialogContentEvents, DialogContentSlots> {
}
export {};
