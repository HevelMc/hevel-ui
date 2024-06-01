import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare const __propDef: {
    props: {
        class?: string | null | undefined;
    } & HTMLAttributes<HTMLSpanElement> & {
        el?: HTMLSpanElement | undefined;
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
export type BreadcrumbPageProps = typeof __propDef.props;
export type BreadcrumbPageEvents = typeof __propDef.events;
export type BreadcrumbPageSlots = typeof __propDef.slots;
export default class BreadcrumbPage extends SvelteComponent<BreadcrumbPageProps, BreadcrumbPageEvents, BreadcrumbPageSlots> {
}
export {};
