import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("svelte/elements").HTMLAttributes<HTMLDivElement> & {
        errorClasses?: string | undefined | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            errors: string[];
            fieldErrorsAttrs: {
                id: string;
                'data-fs-error': string | undefined;
                'data-fs-field-errors': string;
                'aria-live': "assertive";
            };
            errorAttrs: {
                'data-fs-field-error': string;
                'data-fs-error': string | undefined;
            };
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FormFieldErrorsProps = typeof __propDef.props;
export type FormFieldErrorsEvents = typeof __propDef.events;
export type FormFieldErrorsSlots = typeof __propDef.slots;
export default class FormFieldErrors extends SvelteComponent<FormFieldErrorsProps, FormFieldErrorsEvents, FormFieldErrorsSlots> {
}
export {};
