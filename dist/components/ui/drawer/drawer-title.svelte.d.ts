import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: import("bits-ui").DialogTitleProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DrawerTitleProps = typeof __propDef.props;
export type DrawerTitleEvents = typeof __propDef.events;
export type DrawerTitleSlots = typeof __propDef.slots;
export default class DrawerTitle extends SvelteComponent<DrawerTitleProps, DrawerTitleEvents, DrawerTitleSlots> {
}
export {};
