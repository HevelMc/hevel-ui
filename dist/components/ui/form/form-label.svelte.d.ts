import { SvelteComponent } from "svelte";
import type { Label as LabelPrimitive } from 'bits-ui';
declare const __propDef: {
    props: LabelPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            labelAttrs: import("svelte/store").Writable<import("formsnap").LabelAttrs>;
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FormLabelProps = typeof __propDef.props;
export type FormLabelEvents = typeof __propDef.events;
export type FormLabelSlots = typeof __propDef.slots;
export default class FormLabel extends SvelteComponent<FormLabelProps, FormLabelEvents, FormLabelSlots> {
}
export {};
