/// <reference types="svelte" />
import AudioPlayer from './audio-player.svelte';
export declare const audioPlayer: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<{
        audio: HTMLAudioElement | undefined;
        paused: boolean;
        duration: number;
        track_id: string | null;
        name: string;
        currentTime: number;
        volume: number;
    }>, invalidate?: import("svelte/store").Invalidator<{
        audio: HTMLAudioElement | undefined;
        paused: boolean;
        duration: number;
        track_id: string | null;
        name: string;
        currentTime: number;
        volume: number;
    }> | undefined) => import("svelte/store").Unsubscriber;
    play: () => void;
    pause: () => void;
    stop: () => void;
    setCurrentTime: (time: number) => void;
    start: (url: string, track_id: string, name: string) => void;
    setVolume: (volume: number) => void;
};
export { AudioPlayer };
