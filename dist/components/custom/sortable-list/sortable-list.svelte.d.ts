import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        list: any[];
        disabled?: boolean | undefined;
        placeholder?: string | undefined;
    };
    events: {
        sort: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: any;
            index: any;
        };
        'no-items-title': {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SortableListProps = typeof __propDef.props;
export type SortableListEvents = typeof __propDef.events;
export type SortableListSlots = typeof __propDef.slots;
export default class SortableList extends SvelteComponent<SortableListProps, SortableListEvents, SortableListSlots> {
}
export {};
