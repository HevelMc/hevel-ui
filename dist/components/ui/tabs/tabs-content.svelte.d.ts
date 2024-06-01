import { SvelteComponent } from "svelte";
import { Tabs as TabsPrimitive } from "bits-ui";
declare const __propDef: {
    props: TabsPrimitive.ContentProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TabsContentProps = typeof __propDef.props;
export type TabsContentEvents = typeof __propDef.events;
export type TabsContentSlots = typeof __propDef.slots;
export default class TabsContent extends SvelteComponent<TabsContentProps, TabsContentEvents, TabsContentSlots> {
}
export {};
