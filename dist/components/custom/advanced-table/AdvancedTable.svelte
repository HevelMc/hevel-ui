<script>import { Table, Dialog, Input, Button, Loader } from "../../../index.js";
import { createTable, Subscribe, Render } from "svelte-headless-table";
import { addSortBy, addSelectedRows, addPagination, addHiddenColumns } from "svelte-headless-table/plugins";
import { writable } from "svelte/store";
import { cn } from "../../../utils.js";
import ComboBoxTable from "./ComboBoxTable.svelte";
import PaginationTable from "./PaginationTable.svelte";
import { ArrowDownNarrowWide, ArrowUpDown, ArrowUpNarrowWide } from "lucide-svelte";
import { checkboxColumn } from "./index.js";
import SelectedCountTable from "./SelectedCountTable.svelte";
export let columns;
export let getData;
let data = writable([]);
export let pagination = false;
export let disablePageSkip = false;
export let selectable = false;
export let searchable = false;
export let filterable = false;
export let sortable = false;
export let initialPageSize = 10;
export let searchPlaceholder = "Rechercher...";
export let dropdownTitle = "Filtrer par...";
export let dropdownList = [];
export let initialSortKeys = [];
export let onDialogChange = () => {
};
let pageIndex = writable(0);
let pageSize = writable(initialPageSize);
let searchQuery = writable("");
let serverItemCount = writable(1);
let loading = true;
let dropdownValue = writable("all");
const table = createTable(data, {
  ...selectable && { select: addSelectedRows() },
  ...sortable && { sort: addSortBy({ disableMultiSort: true, serverSide: true, initialSortKeys }) },
  ...pagination && { page: addPagination({ serverSide: true, serverItemCount, initialPageSize }) },
  ...{ hide: addHiddenColumns({ initialHiddenColumnIds: ["_id"] }) }
});
const tableColumns = table.createColumns(
  [...selectable ? [checkboxColumn] : [], ...columns].map(
    (column) => table.column({
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
$:
  callApi($sortKeys[0], $pageSize, $pageIndex, $dropdownValue, $searchQuery);
export function triggerResync() {
  callApi($sortKeys[0], $pageSize, $pageIndex, $dropdownValue, $searchQuery);
}
async function callApi(sortKey, pageSize2, pageIndex2, filter, searchQuery2) {
  let col = columns.find((c) => sortKey?.id && c.accessor === sortKey?.id);
  if (!col)
    col = columns[0];
  let sorting = col ? {
    id: col.sortKey ?? col.id,
    order: sortKey?.order
  } : void 0;
  return await getData({
    pageIndex: pageIndex2,
    pageSize: pageSize2,
    sortBy: sorting,
    filter,
    searchQuery: searchQuery2
  }).then(({ data: response, total }) => {
    data.set(response);
    serverItemCount.set(total);
    loading = false;
  });
}
const cellProps = (cell) => cell.props();
const rowData = (row) => row.original;
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
