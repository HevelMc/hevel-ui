<script lang="ts">
  import type { TableViewModel } from 'svelte-headless-table';
  import type { AnyPlugins } from 'svelte-headless-table/plugins';
  import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-svelte';
  import type { Writable } from 'svelte/store';
  import { Button, Select } from '$lib/index.js';

  export let tableModel: TableViewModel<any, AnyPlugins>;
  export let currentPageIndex: Writable<number>;
  export let currentPageSize: Writable<number>;
  export let serverItemCount: Writable<number>;
  export let disablePageSkip: boolean = false;

  const { pluginStates } = tableModel;

  const { hasNextPage, hasPreviousPage, pageIndex, pageCount, pageSize } = pluginStates.page;

  $: $currentPageIndex = $pageIndex;
  $: $currentPageSize = $pageSize;
</script>

<div class="flex items-center gap-6 lg:gap-8">
  <div class="flex items-center gap-2">
    <p class="text-sm font-medium">Lignes par page</p>
    <Select.Root
      onSelectedChange={(selected) => pageSize.set(Number(selected?.value))}
      selected={{ value: $pageSize, label: $pageSize.toString() }}
    >
      <Select.Trigger class="w-[180px] bg-background">
        <Select.Value placeholder="Select page size" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="10">10</Select.Item>
        <Select.Item value="20">20</Select.Item>
        <Select.Item value="30">30</Select.Item>
        <Select.Item value="40">40</Select.Item>
        <Select.Item value="50">50</Select.Item>
      </Select.Content>
    </Select.Root>
  </div>
  <div class="flex w-auto items-center justify-center text-sm font-medium">
    Page {$pageIndex + 1} sur {$pageCount}
  </div>
  <div>
    <span>Total : {$serverItemCount}</span>
  </div>
  <div class="flex items-center gap-2">
    {#if !disablePageSkip}
      <Button
        variant="outline"
        class="hidden h-8 w-8 p-0 lg:flex"
        on:click={() => ($pageIndex = 0)}
        disabled={!$hasPreviousPage}
      >
        <ChevronsLeft size={15} />
      </Button>
    {/if}
    <Button variant="outline" class="h-8 w-8 p-0" on:click={() => ($pageIndex = $pageIndex - 1)} disabled={!$hasPreviousPage}>
      <ChevronLeft size={15} />
    </Button>
    <Button variant="outline" class="h-8 w-8 p-0" disabled={!$hasNextPage} on:click={() => ($pageIndex = $pageIndex + 1)}>
      <ChevronRight size={15} />
    </Button>
    {#if !disablePageSkip}
      <Button
        variant="outline"
        class="hidden h-8 w-8 p-0 lg:flex"
        disabled={!$hasNextPage}
        on:click={() => ($pageIndex = $pageCount - 1)}
      >
        <ChevronsRight size={15} />
      </Button>
    {/if}
  </div>
</div>
