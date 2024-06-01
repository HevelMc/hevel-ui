import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string;
        label?: string | undefined;
        colors: {
            [key: string]: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type StatusBadgeProps = typeof __propDef.props;
export type StatusBadgeEvents = typeof __propDef.events;
export type StatusBadgeSlots = typeof __propDef.slots;
export default class StatusBadge extends SvelteComponent<StatusBadgeProps, StatusBadgeEvents, StatusBadgeSlots> {
}
export {};
