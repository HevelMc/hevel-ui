import { SvelteComponent } from "svelte";
import type { FormPath } from "sveltekit-superforms";
import type { HTMLAttributes } from "svelte/elements";
import * as FormPrimitive from "formsnap";
declare class __sveltets_Render<T extends Record<string, unknown>, U extends FormPath<T>> {
    props(): FormPrimitive.FieldProps<T, U> & HTMLAttributes<HTMLElement>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            constraints: Partial<{}> | undefined;
            errors: string[];
            tainted: boolean;
            value: unknown;
        };
    };
}
export type FormFieldProps<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['props']>;
export type FormFieldEvents<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['events']>;
export type FormFieldSlots<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['slots']>;
export default class FormField<T extends Record<string, unknown>, U extends FormPath<T>> extends SvelteComponent<FormFieldProps<T, U>, FormFieldEvents<T, U>, FormFieldSlots<T, U>> {
}
export {};
