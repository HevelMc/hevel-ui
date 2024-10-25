<script lang="ts" generics="TData">
  import XIcon from 'lucide-svelte/icons/x';
  import type { Table } from '@tanstack/table-core';
  import { DataTableFacetedFilter, DataTableViewOptions } from './index.js';
  import { Button, Input } from '$lib/index.js';
  import type { Icon } from 'lucide-svelte';

  interface Props {
    table: Table<TData>;
    searchPlaceholder?: string;
    searchQuery?: string;
    filters?: { [key: string]: { label: string; value: string; icon?: typeof Icon }[] };
  }

  let { table, searchPlaceholder, searchQuery = $bindable(''), filters = {} }: Props = $props();

  const isFiltered = $derived(table.getState().columnFilters.length > 0);
</script>

<div class="flex items-center justify-between">
  <div class="flex flex-1 items-center space-x-2">
    {#if searchPlaceholder}
      <Input placeholder={searchPlaceholder} bind:value={searchQuery} class="h-8 w-[200px] lg:w-[300px] xl:w-[360px]" />
    {/if}

    {#each Object.entries(filters) as [key, values]}
      {@const column = table.getColumn(key)}
      {#if column}
        <DataTableFacetedFilter {column} title={key} options={values} />
      {/if}
    {/each}

    {#if isFiltered}
      <Button variant="ghost" onclick={() => table.resetColumnFilters()} class="h-8 px-2 lg:px-3">
        Reset
        <XIcon class="ml-2 size-4" />
      </Button>
    {/if}
  </div>
  <DataTableViewOptions {table} />
</div>
