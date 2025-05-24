<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { cn } from '$lib/index.js';
  import { audioPlayer } from './index.js';
  import { Volume1, Volume2, VolumeX, Play, Pause, X } from '@lucide/svelte';

  interface Props {
    class?: string;
  }

  let { class: className }: Props = $props();

  let currentTime: number = $state($audioPlayer.volume);
  let interval: any = null;
  let mouseDown: boolean = false;
  let volume = $state(1);

  function getDuration() {
    if (mouseDown) return;
    currentTime = $audioPlayer.currentTime;
  }

  function pauseAudio() {
    audioPlayer.pause();
  }

  function playAudio() {
    audioPlayer.play();

    console.log($audioPlayer);
  }

  function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  onMount(() => {
    interval = setInterval(getDuration, 10);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $audioPlayer.duration >= 0}
  <div class={cn('bg-card text-card-foreground flex flex-col rounded-lg border p-2 shadow-xs', className)}>
    <span class="text-center text-lg">{$audioPlayer?.name}</span>
    <div class="flex w-full flex-row items-center gap-3">
      <button onclick={() => ($audioPlayer.paused ? playAudio() : pauseAudio())}>
        {#if $audioPlayer.paused}
          <Play class="fill-foreground text-foreground size-5 shrink-0" />
        {:else}
          <Pause class="fill-foreground text-foreground size-5 shrink-0" />
        {/if}
      </button>

      <span>{formatDuration(currentTime)}</span>

      <!-- We cannot use shadcn Input here because it doesn't expose drag events for now. -->
      <!-- https://github.com/huntabyte/bits-ui/discussions/796 -->
      <input
        type="range"
        class="slider accent-secondary-foreground w-full"
        bind:value={currentTime}
        min={0}
        max={$audioPlayer.duration}
        step={0.01}
        name="duration"
        onmousedown={() => (mouseDown = true)}
        onmouseup={() => (mouseDown = false)}
        ontouchstart={() => (mouseDown = true)}
        ontouchend={() => (mouseDown = false)}
        onchange={() => {
          mouseDown = false;
          audioPlayer.setCurrentTime(currentTime);
        }}
      />

      <span>{formatDuration($audioPlayer.duration)}</span>

      {#if volume == 0}
        <VolumeX class="fill-foreground text-foreground size-5 shrink-0" />
      {:else if volume < 0.5}
        <Volume1 class="fill-foreground text-foreground size-5 shrink-0" />
      {:else}
        <Volume2 class="fill-foreground text-foreground size-5 shrink-0" />
      {/if}

      <input
        type="range"
        class="slider accent-secondary-foreground w-1/2 md:w-1/3"
        bind:value={volume}
        min={0}
        max={1}
        step={0.01}
        onchange={() => audioPlayer.setVolume(volume)}
        name="volume"
      />

      <button onclick={() => audioPlayer.stop()}>
        <X class="text-foreground size-5 shrink-0" />
      </button>
    </div>
  </div>
{/if}
