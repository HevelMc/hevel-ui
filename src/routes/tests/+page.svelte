<script lang="ts">
  import { Button, Card, DatePicker, Input, Label, DatePickerRange, MonthPicker, buttonVariants } from '$lib/index.js';
  import { MonthPickerRange, Popover, SortableList, CopyButton, LightSwitch, LoaderButton } from '$lib/index.js';
  import { AudioPlayer, audioPlayer, ComboBox } from '$lib/index.js';
  import Play from 'lucide-svelte/icons/play';
  import Pause from 'lucide-svelte/icons/pause';
  import { resetMode, setMode } from 'mode-watcher';

  let sortableList = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
    { id: '3', name: 'Item C' }
  ];

  function toggleAudio() {
    if ($audioPlayer?.track_id == null) {
      audioPlayer.start('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'test-audio', 'Audio test');
      return;
    }
    $audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
  }
</script>

<div class="container flex flex-col gap-4 p-4">
  <Card.Root>
    <Card.Header>
      <Card.Title>Card Title</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>Card Content</p>
    </Card.Content>
    <Card.Footer>
      <p>Card Footer</p>
    </Card.Footer>
  </Card.Root>

  <Popover.Root>
    <Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Open</Popover.Trigger>
    <Popover.Content class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Width</Label>
            <Input id="width" value="100%" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxWidth">Max. width</Label>
            <Input id="maxWidth" value="300px" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="height">Height</Label>
            <Input id="height" value="25px" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxHeight">Max. height</Label>
            <Input id="maxHeight" value="none" class="col-span-2 h-8" />
          </div>
        </div>
      </div>
    </Popover.Content>
  </Popover.Root>

  <ComboBox
    items={[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Grape', value: 'grape' },
      { label: 'Lemon', value: 'lemon' },
      { label: 'Orange', value: 'orange' },
      { label: 'Peach', value: 'peach' },
      { label: 'Pear', value: 'pear' },
      { label: 'Pineapple', value: 'pineapple' },
      { label: 'Strawberry', value: 'strawberry' },
      { label: 'Watermelon', value: 'watermelon' }
    ]}
    selectPlaceholder="Select a fruit..."
    searchPlaceholder="Search for a fruit..."
    noResultsPlaceholder="No fruits found."
  />

  <div class="flex items-center justify-center gap-8">
    <CopyButton variant="outline" value={'Hello world!'} tooltipCopy="Copier hello world" tooltipCopied="Hello world copié" />
    <LightSwitch variant="outline" {setMode} {resetMode} />
    <LoaderButton
      variant="outline"
      onclick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('2 seconds later...');
      }}
    >
      Test
    </LoaderButton>
    <Button variant="outline" onclick={toggleAudio}>
      {#if $audioPlayer.paused}
        <Play class="h-4 w-4" />
      {:else}
        <Pause class="h-4 w-4" />
      {/if}
    </Button>
    <Button href="/table" variant="outline">Table Page</Button>
  </div>

  {#if $audioPlayer?.track_id != null}
    <AudioPlayer />
  {/if}

  <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
    <DatePicker locale={'fr-FR'} />
    <DatePickerRange locale={'fr-FR'} />
    <MonthPicker locale={'fr-FR'} />
    <MonthPickerRange />
  </div>

  <SortableList list={sortableList} on:sort={(event) => (sortableList = event.detail)}>
    {#snippet child({ item, index }: { item: any; index: number })}
      <div class="rounded-md border border-border p-4">{index + 1}. {item.name}</div>
    {/snippet}
  </SortableList>
</div>
