import { SvelteComponent } from "svelte";
import * as ResizablePrimitive from 'paneforge';
declare const __propDef: {
    props: ResizablePrimitive.PaneGroupProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ResizablePaneGroupProps = typeof __propDef.props;
export type ResizablePaneGroupEvents = typeof __propDef.events;
export type ResizablePaneGroupSlots = typeof __propDef.slots;
export default class ResizablePaneGroup extends SvelteComponent<ResizablePaneGroupProps, ResizablePaneGroupEvents, ResizablePaneGroupSlots> {
}
export {};
