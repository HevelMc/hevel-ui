import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        loading?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type LoaderProps = typeof __propDef.props;
export type LoaderEvents = typeof __propDef.events;
export type LoaderSlots = typeof __propDef.slots;
export default class Loader extends SvelteComponent<LoaderProps, LoaderEvents, LoaderSlots> {
}
export {};