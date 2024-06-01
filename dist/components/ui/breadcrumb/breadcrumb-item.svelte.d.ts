import { SvelteComponent } from "svelte";
import type { HTMLLiAttributes } from 'svelte/elements';
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
export type BreadcrumbItemProps = typeof __propDef.props;
export type BreadcrumbItemEvents = typeof __propDef.events;
export type BreadcrumbItemSlots = typeof __propDef.slots;
export default class BreadcrumbItem extends SvelteComponent<BreadcrumbItemProps, BreadcrumbItemEvents, BreadcrumbItemSlots> {
}
export {};
