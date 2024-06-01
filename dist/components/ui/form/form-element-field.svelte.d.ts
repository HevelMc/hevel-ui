import { SvelteComponent } from "svelte";
import type { FormPathLeaves } from "sveltekit-superforms";
import type { HTMLAttributes } from "svelte/elements";
import * as FormPrimitive from "formsnap";
declare class __sveltets_Render<T extends Record<string, unknown>, U extends FormPathLeaves<T>> {
    props(): FormPrimitive.ElementFieldProps<T, U> & HTMLAttributes<HTMLElement>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            constraints: Partial<{}> | undefined;
            errors: string[];
            tainted: boolean;
            value: never;
        };
    };
}
export type FormElementFieldProps<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = ReturnType<__sveltets_Render<T, U>['props']>;
export type FormElementFieldEvents<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = ReturnType<__sveltets_Render<T, U>['events']>;
export type FormElementFieldSlots<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = ReturnType<__sveltets_Render<T, U>['slots']>;
export default class FormElementField<T extends Record<string, unknown>, U extends FormPathLeaves<T>> extends SvelteComponent<FormElementFieldProps<T, U>, FormElementFieldEvents<T, U>, FormElementFieldSlots<T, U>> {
}
export {};
