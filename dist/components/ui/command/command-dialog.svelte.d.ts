import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        preventScroll?: boolean | undefined;
        closeOnEscape?: boolean | undefined;
        closeOnOutsideClick?: boolean | undefined;
        onOutsideClick?: ((event: MouseEvent | TouchEvent | PointerEvent) => void) | undefined;
        portal?: string | HTMLElement | null | undefined;
        open?: boolean | undefined;
        onOpenChange?: import("bits-ui/dist/internal").OnChangeFn<boolean> | undefined;
        openFocus?: import("bits-ui").FocusProp | undefined;
        closeFocus?: import("bits-ui").FocusProp | undefined;
    } & {
        state?: import("svelte/store").Writable<import("cmdk-sv").State> | undefined;
        label?: string | undefined;
        shouldFilter?: boolean | undefined;
        filter?: ((value: string, search: string) => number) | undefined;
        value?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        loop?: boolean | undefined;
        ids?: Partial<import("cmdk-sv").CommandIds> | undefined;
    } & import("cmdk-sv/dist/internal").HTMLDivAttributes & {
        onKeydown?: ((e: KeyboardEvent) => void) | undefined;
        asChild?: boolean | undefined;
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
export type CommandDialogProps = typeof __propDef.props;
export type CommandDialogEvents = typeof __propDef.events;
export type CommandDialogSlots = typeof __propDef.slots;
export default class CommandDialog extends SvelteComponent<CommandDialogProps, CommandDialogEvents, CommandDialogSlots> {
}
export {};
