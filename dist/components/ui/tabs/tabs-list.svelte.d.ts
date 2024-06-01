import { SvelteComponent } from "svelte";
import { Tabs as TabsPrimitive } from 'bits-ui';
declare const __propDef: {
    props: TabsPrimitive.ListProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TabsListProps = typeof __propDef.props;
export type TabsListEvents = typeof __propDef.events;
export type TabsListSlots = typeof __propDef.slots;
export default class TabsList extends SvelteComponent<TabsListProps, TabsListEvents, TabsListSlots> {
}
export {};
