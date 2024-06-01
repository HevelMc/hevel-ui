import { SvelteComponent } from "svelte";
import type { FormPath } from "sveltekit-superforms";
import * as FormPrimitive from "formsnap";
declare class __sveltets_Render<T extends Record<string, unknown>, U extends FormPath<T>> {
    props(): FormPrimitive.FieldsetProps<T, U>;
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
export type FormFieldsetProps<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['props']>;
export type FormFieldsetEvents<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['events']>;
export type FormFieldsetSlots<T extends Record<string, unknown>, U extends FormPath<T>> = ReturnType<__sveltets_Render<T, U>['slots']>;
export default class FormFieldset<T extends Record<string, unknown>, U extends FormPath<T>> extends SvelteComponent<FormFieldsetProps<T, U>, FormFieldsetEvents<T, U>, FormFieldsetSlots<T, U>> {
}
export {};
