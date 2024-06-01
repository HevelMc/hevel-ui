import { writable } from 'svelte/store';
import AudioPlayer from './audio-player.svelte';
function createAudio() {
    const { subscribe, set, update } = writable({
        audio: typeof Audio == 'undefined' ? undefined : new Audio(),
        paused: true,
        duration: 0,
        track_id: null,
        name: '',
        get currentTime() {
            return this.audio?.currentTime ?? 0;
        },
        get volume() {
            return this.audio?.volume ?? 0;
        }
    });
    function play() {
        update((state) => {
            state.audio?.play();
            state.paused = false;
            return state;
        });
    }
    function pause() {
        update((state) => {
            state.audio?.pause();
            state.paused = true;
            return state;
        });
    }
    function setCurrentTime(time) {
        update((state) => {
            if (state.audio != undefined)
                state.audio.currentTime = time;
            return state;
        });
    }
    function start(url, track_id, name) {
        console.log('start loading', url);
        update((state) => {
            if (state.audio == undefined)
                return state;
            state.audio.src = url;
            state.audio.onloadedmetadata = function () {
                update((state) => {
                    console.log('start playing', url);
                    if (state.audio == undefined)
                        return state;
                    state.audio.currentTime = 0;
                    state.track_id = track_id;
                    state.name = name;
                    state.paused = false;
                    state.duration = state.audio.duration;
                    return state;
                });
            };
            state.audio.onended = function () {
                update((state) => {
                    state.paused = true;
                    state.track_id = null;
                    state.name = '';
                    return state;
                });
            };
            state.audio.play();
            return state;
        });
    }
    function stop() {
        update((state) => {
            if (state.audio == undefined)
                return state;
            state.audio.pause();
            state.paused = true;
            state.audio.currentTime = 0;
            state.track_id = null;
            state.name = '';
            return state;
        });
    }
    function setVolume(volume) {
        update((state) => {
            if (state.audio == undefined)
                return state;
            state.audio.volume = volume;
            return state;
        });
    }
    return {
        subscribe,
        play,
        pause,
        stop,
        setCurrentTime,
        start,
        setVolume
    };
}
export const audioPlayer = createAudio();
export { AudioPlayer };
