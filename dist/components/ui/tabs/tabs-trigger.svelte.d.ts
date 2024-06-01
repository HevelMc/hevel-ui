import { SvelteComponent } from "svelte";
import { Tabs as TabsPrimitive } from "bits-ui";
declare const __propDef: {
    props: TabsPrimitive.TriggerProps;
    slots: {
        default: {};
    };
    events: TabsPrimitive.TriggerEvents;
};
export type TabsTriggerProps = typeof __propDef.props;
export type TabsTriggerEvents = typeof __propDef.events;
export type TabsTriggerSlots = typeof __propDef.slots;
export default class TabsTrigger extends SvelteComponent<TabsTriggerProps, TabsTriggerEvents, TabsTriggerSlots> {
}
export {};
