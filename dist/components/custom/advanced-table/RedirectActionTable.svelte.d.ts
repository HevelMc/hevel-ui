import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        url: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RedirectActionTableProps = typeof __propDef.props;
export type RedirectActionTableEvents = typeof __propDef.events;
export type RedirectActionTableSlots = typeof __propDef.slots;
export default class RedirectActionTable extends SvelteComponent<RedirectActionTableProps, RedirectActionTableEvents, RedirectActionTableSlots> {
}
export {};
