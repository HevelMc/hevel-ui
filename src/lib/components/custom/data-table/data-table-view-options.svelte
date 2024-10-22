<script lang="ts" generics="TData">
  import MixerHorizontal from 'svelte-radix/MixerHorizontal.svelte';
  import type { Table } from '@tanstack/table-core';
  import { buttonVariants, DropdownMenu } from '$lib/index.js';

  let { table }: { table: Table<TData> } = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={buttonVariants({
      variant: 'outline',
      size: 'sm',
      class: 'ml-auto hidden h-8 lg:flex'
    })}
  >
    <MixerHorizontal class="mr-2 size-4" />
    View
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Toggle columns</DropdownMenu.GroupHeading>
      <DropdownMenu.Separator />
      {#each table.getAllColumns().filter((col) => typeof col.accessorFn !== 'undefined' && col.getCanHide()) as column}
        <DropdownMenu.CheckboxItem
          controlledChecked
          checked={column.getIsVisible()}
          onCheckedChange={(v) => column.toggleVisibility(!!v)}
          class="capitalize"
        >
          {column.id}
        </DropdownMenu.CheckboxItem>
      {/each}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
