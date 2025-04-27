<script lang="ts" generics="TData">
  import Settings from '@lucide/svelte/icons/settings-2';
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
    <Settings class="mr-2 size-4" />
    View
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Toggle columns</DropdownMenu.GroupHeading>
      <DropdownMenu.Separator />
      {#each table.getAllColumns().filter((col) => typeof col.accessorFn !== 'undefined' && col.getCanHide()) as column}
        <DropdownMenu.CheckboxItem bind:checked={() => column.getIsVisible(), (v) => column.toggleVisibility(!!v)}>
          {(column.columnDef.meta as any)?.name ?? column.id}
        </DropdownMenu.CheckboxItem>
      {/each}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
