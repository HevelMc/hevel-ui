<script>import { audioPlayer } from "./index.js";
import Volume1 from "lucide-svelte/icons/volume-1";
import Volume2 from "lucide-svelte/icons/volume-2";
import VolumeX from "lucide-svelte/icons/volume-x";
import Play from "lucide-svelte/icons/play";
import Pause from "lucide-svelte/icons/pause";
import X from "lucide-svelte/icons/x";
import { onDestroy, onMount } from "svelte";
let currentTime = $audioPlayer.volume;
let interval = null;
let mouseDown = false;
let volume = 1;
function getDuration() {
  if (mouseDown)
    return;
  currentTime = $audioPlayer.currentTime;
}
function pauseAudio() {
  audioPlayer.pause();
}
function playAudio() {
  audioPlayer.play();
  console.log($audioPlayer);
}
function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
onMount(() => {
  interval = setInterval(getDuration, 10);
});
onDestroy(() => {
  clearInterval(interval);
});
</script>

{#if $audioPlayer.duration >= 0}
  <div class="flex flex-col rounded-lg border bg-card p-2 text-card-foreground shadow-sm">
    <span class="text-center text-lg">{$audioPlayer?.name}</span>
    <div class="flex flex-row items-center gap-3">
      <button on:click={() => ($audioPlayer.paused ? playAudio() : pauseAudio())}>
        {#if $audioPlayer.paused}
          <Play class="h-6 w-6 shrink-0 text-foreground" />
        {:else}
          <Pause class="h-6 w-6 shrink-0 text-foreground" />
        {/if}
      </button>

      <span>{formatDuration(currentTime)}</span>

      <input
        type="range"
        class="slider w-full accent-secondary-foreground"
        bind:value={currentTime}
        min={0}
        max={$audioPlayer.duration}
        step={0.01}
        name="duration"
        on:mousedown={() => (mouseDown = true)}
        on:mouseup={() => (mouseDown = false)}
        on:touchstart={() => (mouseDown = true)}
        on:touchend={() => (mouseDown = false)}
        on:change={() => {
          mouseDown = false;
          audioPlayer.setCurrentTime(currentTime);
        }}
      />

      <span>{formatDuration($audioPlayer.duration)}</span>

      {#if volume == 0}
        <VolumeX class="h-6 w-6 shrink-0 text-foreground" />
      {:else if volume < 0.5}
        <Volume1 class="h-6 w-6 shrink-0 text-foreground" />
      {:else}
        <Volume2 class="h-6 w-6 shrink-0 text-foreground" />
      {/if}

      <input
        type="range"
        class="slider w-1/2 accent-secondary-foreground md:w-1/3"
        bind:value={volume}
        min={0}
        max={1}
        step={0.01}
        on:change={() => audioPlayer.setVolume(volume)}
        name="volume"
      />

      <button on:click={() => audioPlayer.stop()}>
        <X class="h-6 w-6 shrink-0 text-red-600 dark:text-red-400" />
      </button>
    </div>
  </div>
{/if}
