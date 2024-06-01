import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;
export default class Skeleton extends SvelteComponent<SkeletonProps, SkeletonEvents, SkeletonSlots> {
}
export {};
