import { SvelteComponent } from "svelte";
import { type Props } from "../button/index.js";
declare const __propDef: {
    props: {
        page: import("bits-ui").Page;
    } & {
        asChild?: boolean | undefined;
        el?: HTMLButtonElement | undefined;
    } & (import("svelte/elements").HTMLButtonAttributes & Props & {
        isActive: boolean;
    });
    slots: {
        default: {};
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
    };
};
export type PaginationLinkProps = typeof __propDef.props;
export type PaginationLinkEvents = typeof __propDef.events;
export type PaginationLinkSlots = typeof __propDef.slots;
export default class PaginationLink extends SvelteComponent<PaginationLinkProps, PaginationLinkEvents, PaginationLinkSlots> {
}
export {};
