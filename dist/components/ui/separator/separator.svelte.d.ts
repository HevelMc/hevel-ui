import { SvelteComponent } from "svelte";
import { Separator as SeparatorPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SeparatorPrimitive.Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SeparatorProps = typeof __propDef.props;
export type SeparatorEvents = typeof __propDef.events;
export type SeparatorSlots = typeof __propDef.slots;
export default class Separator extends SvelteComponent<SeparatorProps, SeparatorEvents, SeparatorSlots> {
}
export {};
