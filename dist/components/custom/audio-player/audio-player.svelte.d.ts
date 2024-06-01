import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AudioPlayerProps = typeof __propDef.props;
export type AudioPlayerEvents = typeof __propDef.events;
export type AudioPlayerSlots = typeof __propDef.slots;
export default class AudioPlayer extends SvelteComponent<AudioPlayerProps, AudioPlayerEvents, AudioPlayerSlots> {
}
export {};
