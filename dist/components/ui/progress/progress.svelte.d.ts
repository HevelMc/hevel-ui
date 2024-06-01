import { SvelteComponent } from "svelte";
import { Progress as ProgressPrimitive } from 'bits-ui';
declare const __propDef: {
    props: ProgressPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponent<ProgressProps, ProgressEvents, ProgressSlots> {
}
export {};
