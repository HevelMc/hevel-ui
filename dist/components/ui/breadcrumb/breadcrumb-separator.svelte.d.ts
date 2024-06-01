import { SvelteComponent } from "svelte";
import type { HTMLLiAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLLiAttributes & {
        el?: HTMLLIElement | undefined;
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
export type BreadcrumbSeparatorProps = typeof __propDef.props;
export type BreadcrumbSeparatorEvents = typeof __propDef.events;
export type BreadcrumbSeparatorSlots = typeof __propDef.slots;
export default class BreadcrumbSeparator extends SvelteComponent<BreadcrumbSeparatorProps, BreadcrumbSeparatorEvents, BreadcrumbSeparatorSlots> {
}
export {};
