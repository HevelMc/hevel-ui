import { SvelteComponent } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
declare const __propDef: {
    props: HTMLAnchorAttributes & {
        el?: HTMLAnchorElement | undefined;
        asChild?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            attrs: Record<string, unknown>;
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type BreadcrumbLinkProps = typeof __propDef.props;
export type BreadcrumbLinkEvents = typeof __propDef.events;
export type BreadcrumbLinkSlots = typeof __propDef.slots;
export default class BreadcrumbLink extends SvelteComponent<BreadcrumbLinkProps, BreadcrumbLinkEvents, BreadcrumbLinkSlots> {
}
export {};
