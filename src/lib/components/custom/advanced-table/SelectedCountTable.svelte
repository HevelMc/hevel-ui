<script lang="ts">
  import { DropdownMenu } from '$lib/components/ui/index.js';
  import { MoreVertical } from 'lucide-svelte';
  import type { TableViewModel } from 'svelte-headless-table';
  import type { AnyPlugins } from 'svelte-headless-table/plugins';

  export let tableModel: TableViewModel<any, AnyPlugins>;
  export let selectedRowsActions: { label: string; action: (data: any) => void }[] = [];

  const { pluginStates, rows } = tableModel;

  const selectedDataIds = pluginStates.select.selectedDataIds;
</script>

<div class="flex flex-1 items-center gap-2 text-sm text-muted-foreground">
  {Object.keys($selectedDataIds).length} of{' '}
  {$rows.length} row(s) selected

  {#if Object.keys($selectedDataIds).length > 0 && selectedRowsActions.length > 0}
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <MoreVertical class="h-4 w-4" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          {#each selectedRowsActions as action}
            <DropdownMenu.Item
              on:click={() => {
                const selectedRows = $rows.filter((row) => $selectedDataIds[row.id]);
                action.action(selectedRows);
              }}
            >
              {action.label}
            </DropdownMenu.Item>
          {/each}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  {/if}
</div>
