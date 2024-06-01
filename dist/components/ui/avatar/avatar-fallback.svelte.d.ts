import { SvelteComponent } from "svelte";
import { Avatar as AvatarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AvatarPrimitive.FallbackProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AvatarFallbackProps = typeof __propDef.props;
export type AvatarFallbackEvents = typeof __propDef.events;
export type AvatarFallbackSlots = typeof __propDef.slots;
export default class AvatarFallback extends SvelteComponent<AvatarFallbackProps, AvatarFallbackEvents, AvatarFallbackSlots> {
}
export {};
