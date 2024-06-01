<script lang="ts">
  import { Table, Dialog, Input, Button, Loader } from '$lib/index.js';
  import { createTable, Subscribe, Render } from 'svelte-headless-table';
  import { addSortBy, addSelectedRows, addPagination, addHiddenColumns } from 'svelte-headless-table/plugins';
  import { writable, type Readable, type Writable } from 'svelte/store';
  import { cn } from '$lib/utils.js';
  import ComboBoxTable from './ComboBoxTable.svelte';
  import PaginationTable from './PaginationTable.svelte';
  import ArrowDownNarrowWide from 'lucide-svelte/icons/arrow-down-narrow-wide';
  import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
  import ArrowUpNarrowWide from 'lucide-svelte/icons/arrow-up-narrow-wide';
  import { checkboxColumn, type getDataFunction, type Column } from './index.js';
  import SelectedCountTable from './SelectedCountTable.svelte';

  export let columns: Column[];
  export let getData: getDataFunction;

  let data: Writable<any[]> = writable([]);

  export let pagination: boolean = false;
  export let disablePageSkip: boolean = false;
  export let selectable: boolean = false;
  export let searchable: boolean = false;
  export let filterable: boolean = false;
  export let sortable: boolean = false;

  export let initialPageSize: number = 10;

  export let searchPlaceholder: string = 'Rechercher...';
  export let dropdownTitle: string = 'Filtrer par...';
  export let dropdownList: { value: string; label: string }[] = [];
  export let initialSortKeys: { id: string; order: 'asc' | 'desc' }[] = [];
  export let onDialogChange: (value: boolean) => void = () => {};

  let pageIndex: Writable<number> = writable(0);
  let pageSize: Writable<number> = writable(initialPageSize);
  let searchQuery: Writable<string> = writable('');
  let serverItemCount: Writable<number> = writable(1);
  let loading: boolean = true;
  let dropdownValue: Writable<string> = writable('all');

  const table = createTable(data, {
    ...(selectable && { select: addSelectedRows() }),
    ...(sortable && { sort: addSortBy({ disableMultiSort: true, serverSide: true, initialSortKeys }) }),
    ...(pagination && { page: addPagination({ serverSide: true, serverItemCount, initialPageSize }) }),
    ...{ hide: addHiddenColumns({ initialHiddenColumnIds: ['_id'] }) }
  });

  const tableColumns = table.createColumns(
    [...(selectable ? [checkboxColumn] : []), ...columns].map((column) =>
      table.column({
        header: column.header,
        accessor: column.accessor ?? column.id,
        cell: column.cell,
        plugins: {
          sort: {
            disable: !column.sortKey,
            sortBy: column.sortKey
          }
        }
      })
    )
  );

  const tableModel = table.createViewModel(tableColumns);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } = tableModel;

  const sortKeys = sortable ? pluginStates.sort?.sortKeys : writable([]);

  const selectedDataIds = selectable ? pluginStates.select?.selectedDataIds : writable([]);

  $: callApi($sortKeys[0], $pageSize, $pageIndex, $dropdownValue, $searchQuery);

  export function triggerResync() {
    callApi($sortKeys[0], $pageSize, $pageIndex, $dropdownValue, $searchQuery);
  }

  async function callApi(sortKey: any, pageSize: number, pageIndex: number, filter: string, searchQuery: string) {
    let col = columns.find((c) => sortKey?.id && c.accessor === sortKey?.id);
    if (!col) col = columns[0];

    let sorting = col
      ? {
          id: col.sortKey ?? col.id,
          order: sortKey?.order
        }
      : undefined;

    return await getData({
      pageIndex,
      pageSize,
      sortBy: sorting,
      filter,
      searchQuery
    }).then(({ data: response, total }) => {
      data.set(response);
      serverItemCount.set(total);
      loading = false;
    });
  }

  const cellProps = (
    cell: any
  ): Readable<{
    page?: any;
    sort?: any;
    select?: any;
  }> => cell.props();

  const rowData = (row: any): any => row.original;
</script>

<Loader {loading}>
  <div class="h-full w-full">
    {#if searchable || filterable || $$slots.actions || $$slots.filter}
      <div class="flex items-center justify-between pb-4">
        <div class="flex w-full items-center gap-2">
          {#if searchable}
            <Input class="max-w-sm bg-background" placeholder={searchPlaceholder} type="search" bind:value={$searchQuery} />
          {/if}
          <slot name="actions" />
        </div>

        <div>
          <slot name="filter" />
          {#if filterable}
            <ComboBoxTable selectPlaceholder={dropdownTitle} data={dropdownList} selectedValue={dropdownValue} />
          {/if}
        </div>
      </div>
    {/if}
    <div class="w-full rounded-lg border">
      <Table.Root {...$tableAttrs} class="w-full rounded-lg bg-background">
        <Table.Header>
          {#each $headerRows as headerRow}
            <Subscribe rowAttrs={headerRow.attrs()}>
              <Table.Row>
                {#each headerRow.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs props={cellProps(cell)} let:props>
                    <Table.Head
                      {...attrs}
                      class={cn('px-2 [&:has([role=checkbox])]:pl-3', columns.find((c) => c.id === cell.id)?.alignment)}
                    >
                      {#if sortable && !props.sort.disabled}
                        <Button variant="ghost" on:click={props.sort.toggle} size="sm">
                          <Render of={cell.render()} />
                          {#if $sortKeys[0]?.id === cell.id}
                            {#if $sortKeys[0]?.order === 'asc'}
                              <ArrowUpNarrowWide class="ml-2 h-4 w-4 text-foreground" />
                            {:else}
                              <ArrowDownNarrowWide class="ml-2 h-4 w-4 text-foreground" />
                            {/if}
                          {:else}
                            <ArrowUpDown class="ml-2 h-4 w-4" />
                          {/if}
                        </Button>
                      {:else}
                        <Render of={cell.render()} />
                      {/if}
                    </Table.Head>
                  </Subscribe>
                {/each}
              </Table.Row>
            </Subscribe>
          {/each}
        </Table.Header>
        <Table.Body {...$tableBodyAttrs} class="overflow-y-scroll">
          {#each $pageRows as row (row.id)}
            <Dialog.Root onOpenChange={onDialogChange}>
              <Dialog.Trigger asChild let:builder>
                <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                  <Table.Row {...rowAttrs} data-state={selectable && $selectedDataIds[row.id] && 'selected'}>
                    {#each row.cells as cell (cell.id)}
                      <Subscribe attrs={cell.attrs()} let:attrs>
                        <Table.Cell
                          class={cn('p-2 [&:has([role=checkbox])]:pl-3', columns.find((c) => c.id === cell.id)?.alignment)}
                          {...attrs}
                        >
                          <Render of={cell.render()} />
                        </Table.Cell>
                      </Subscribe>
                    {/each}
                  </Table.Row>
                </Subscribe>
              </Dialog.Trigger>
              <slot name="dialog" data={rowData(row)} />
            </Dialog.Root>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
    <div class="mt-4 flex items-center justify-between px-2">
      <div class="w-auto">
        {#if selectable}
          <SelectedCountTable {tableModel} />
        {/if}
      </div>
      <div class="w-auto">
        {#if pagination}
          <PaginationTable
            {tableModel}
            {serverItemCount}
            currentPageIndex={pageIndex}
            currentPageSize={pageSize}
            {disablePageSkip}
          />
        {/if}
      </div>
    </div>
  </div>
</Loader>
