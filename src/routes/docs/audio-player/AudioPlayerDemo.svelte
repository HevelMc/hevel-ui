<script lang="ts">
  import { AudioPlayer, audioPlayer, Table } from '$lib/index.js';
  import { Pause, Play } from 'lucide-svelte';

  const tracks = [
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      id: 'test-audio-1',
      title: 'Audio test 1',
      duration: '6:12'
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      id: 'test-audio-2',
      title: 'Audio test 2',
      duration: '7:05'
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      id: 'test-audio-3',
      title: 'Audio test 3',
      duration: '5:44'
    }
  ];

  function playMusic(track: any) {
    if ($audioPlayer.track_id == track.id.toString()) {
      $audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
      return;
    }
    audioPlayer.start(track.src, track.id.toString(), '');
  }
</script>

<div class="grid w-full gap-2">
  <div class="grid h-full gap-2">
    <Table.Root>
      <Table.Header>
        <Table.Row class="hover:bg-inherit">
          <Table.Head class="w-12 text-center">#</Table.Head>
          <Table.Head>Title</Table.Head>
          <Table.Head class="w-12 text-center">Duration</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each tracks as track, i}
          <Table.Row class="group" onclick={() => playMusic(track)}>
            <Table.Cell class="p-2 text-center">
              <span class="text-sm text-muted-foreground group-hover:hidden">{i + 1}</span>
              {#if $audioPlayer.track_id == track.id.toString() && !$audioPlayer.paused}
                <Pause class="hidden h-4 w-4 fill-primary text-primary group-hover:inline" />
              {:else}
                <Play class="hidden h-4 w-4 fill-primary text-primary group-hover:inline" />
              {/if}
            </Table.Cell>
            <Table.Cell class="p-2">
              <span class="text-lg text-primary">{track.title}</span>
            </Table.Cell>
            <Table.Cell class="p-2 text-center">
              <span class="shrink-0 text-sm text-muted-foreground">{track.duration}</span>
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  {#if $audioPlayer.track_id !== null}
    <AudioPlayer class="border-none bg-muted/30" />
  {/if}
</div>
