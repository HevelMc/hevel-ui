import { SvelteComponent } from "svelte";
import * as FormPrimitive from "formsnap";
declare const __propDef: {
    props: FormPrimitive.LegendProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            legendAttrs: {
                'data-fs-legend': string;
                'data-fs-error': string | undefined;
            };
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FormLegendProps = typeof __propDef.props;
export type FormLegendEvents = typeof __propDef.events;
export type FormLegendSlots = typeof __propDef.slots;
export default class FormLegend extends SvelteComponent<FormLegendProps, FormLegendEvents, FormLegendSlots> {
}
export {};
