import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        content?: string | undefined;
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type CellContainerProps = typeof __propDef.props;
export type CellContainerEvents = typeof __propDef.events;
export type CellContainerSlots = typeof __propDef.slots;
export default class CellContainer extends SvelteComponent<CellContainerProps, CellContainerEvents, CellContainerSlots> {
}
export {};
