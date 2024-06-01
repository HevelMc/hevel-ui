import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: import("bits-ui").DialogDescriptionProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DrawerDescriptionProps = typeof __propDef.props;
export type DrawerDescriptionEvents = typeof __propDef.events;
export type DrawerDescriptionSlots = typeof __propDef.slots;
export default class DrawerDescription extends SvelteComponent<DrawerDescriptionProps, DrawerDescriptionEvents, DrawerDescriptionSlots> {
}
export {};
