import { SvelteComponent } from "svelte";
import { Avatar as AvatarPrimitive } from 'bits-ui';
declare const __propDef: {
    props: AvatarPrimitive.ImageProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AvatarImageProps = typeof __propDef.props;
export type AvatarImageEvents = typeof __propDef.events;
export type AvatarImageSlots = typeof __propDef.slots;
export default class AvatarImage extends SvelteComponent<AvatarImageProps, AvatarImageEvents, AvatarImageSlots> {
}
export {};
