import { SvelteComponent } from "svelte";
import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
declare const __propDef: {
    props: DropdownMenuPrimitive.SeparatorProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DropdownMenuSeparatorProps = typeof __propDef.props;
export type DropdownMenuSeparatorEvents = typeof __propDef.events;
export type DropdownMenuSeparatorSlots = typeof __propDef.slots;
export default class DropdownMenuSeparator extends SvelteComponent<DropdownMenuSeparatorProps, DropdownMenuSeparatorEvents, DropdownMenuSeparatorSlots> {
}
export {};
