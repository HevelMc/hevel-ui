<script lang="ts">
  import {
    Button,
    Card,
    DatePicker,
    Input,
    Label,
    DatePickerRange,
    MonthPicker,
    MonthPickerRange,
    Popover,
    SortableList,
    CopyButton,
    LightSwitch,
    LoaderButton
  } from '$lib/index.js';
  import { resetMode, setMode } from 'mode-watcher';

  let sortableList = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
    { id: '3', name: 'Item C' }
  ];
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

  <Popover.Root portal={null}>
    <Popover.Trigger asChild let:builder>
      <Button builders={[builder]} variant="outline">Open</Button>
    </Popover.Trigger>
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

  <div class="flex items-center justify-center gap-8">
    <CopyButton value={'Hello world!'} tooltipCopy="Copier hello world" tooltipCopied="Hello world copié" />
    <LightSwitch {setMode} {resetMode} />
    <LoaderButton
      variant="outline"
      onClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('2 seconds later...');
      }}
    >
      Test
    </LoaderButton>
  </div>

  <div class="grid grid-cols-4 gap-2">
    <DatePicker />
    <DatePickerRange />
    <MonthPicker />
    <MonthPickerRange />
  </div>

  <SortableList list={sortableList} let:item let:index on:sort={(event) => (sortableList = event.detail)}>
    <div class="rounded-md border border-border p-4">{index + 1}. {item.name}</div>
  </SortableList>
</div>
