import { SvelteComponent } from "svelte";
import { Dialog as DialogPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DialogPrimitive.TitleProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DialogTitleProps = typeof __propDef.props;
export type DialogTitleEvents = typeof __propDef.events;
export type DialogTitleSlots = typeof __propDef.slots;
export default class DialogTitle extends SvelteComponent<DialogTitleProps, DialogTitleEvents, DialogTitleSlots> {
}
export {};
