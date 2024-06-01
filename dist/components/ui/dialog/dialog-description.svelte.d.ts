import { SvelteComponent } from "svelte";
import { Dialog as DialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DialogPrimitive.DescriptionProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogDescriptionProps = typeof __propDef.props;
export type DialogDescriptionEvents = typeof __propDef.events;
export type DialogDescriptionSlots = typeof __propDef.slots;
export default class DialogDescription extends SvelteComponent<DialogDescriptionProps, DialogDescriptionEvents, DialogDescriptionSlots> {
}
export {};
