import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLSpanElement> & {
        el?: HTMLSpanElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BreadcrumbEllipsisProps = typeof __propDef.props;
export type BreadcrumbEllipsisEvents = typeof __propDef.events;
export type BreadcrumbEllipsisSlots = typeof __propDef.slots;
export default class BreadcrumbEllipsis extends SvelteComponent<BreadcrumbEllipsisProps, BreadcrumbEllipsisEvents, BreadcrumbEllipsisSlots> {
}
export {};
