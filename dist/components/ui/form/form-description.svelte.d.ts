import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAttributes<HTMLSpanElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            descriptionAttrs: {
                id: string;
                'data-fs-error': string | undefined;
                'data-fs-description': string;
            };
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FormDescriptionProps = typeof __propDef.props;
export type FormDescriptionEvents = typeof __propDef.events;
export type FormDescriptionSlots = typeof __propDef.slots;
export default class FormDescription extends SvelteComponent<FormDescriptionProps, FormDescriptionEvents, FormDescriptionSlots> {
}
export {};
