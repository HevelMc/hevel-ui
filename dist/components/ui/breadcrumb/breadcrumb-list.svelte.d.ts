import { SvelteComponent } from "svelte";
import type { HTMLOlAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLOlAttributes & {
        el?: HTMLOListElement | undefined;
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
export type BreadcrumbListProps = typeof __propDef.props;
export type BreadcrumbListEvents = typeof __propDef.events;
export type BreadcrumbListSlots = typeof __propDef.slots;
export default class BreadcrumbList extends SvelteComponent<BreadcrumbListProps, BreadcrumbListEvents, BreadcrumbListSlots> {
}
export {};
