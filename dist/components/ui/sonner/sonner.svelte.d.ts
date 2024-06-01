import { SvelteComponent } from "svelte";
import { type ToasterProps as SonnerProps } from "svelte-sonner";
declare const __propDef: {
    props: SonnerProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type SonnerProps_ = typeof __propDef.props;
export { SonnerProps_ as SonnerProps };
export type SonnerEvents = typeof __propDef.events;
export type SonnerSlots = typeof __propDef.slots;
export default class Sonner extends SvelteComponent<SonnerProps_, SonnerEvents, SonnerSlots> {
}
