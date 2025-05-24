<script lang="ts" generics="TData">
  import type { ColumnDef, PaginationState, ColumnFiltersState, RowSelectionState } from '@tanstack/table-core';
  import type { SortingState, VisibilityState, Row } from '@tanstack/table-core';
  import { getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel } from '@tanstack/table-core';
  import { getPaginationRowModel, getSortedRowModel } from '@tanstack/table-core';
  import DataTableToolbar from './data-table-toolbar.svelte';
  import DataTablePagination from './data-table-pagination.svelte';
  import { createSvelteTable, type getDataFunction } from './data-table.svelte.js';
  import { DataTableColumnHeader, renderComponent, Table } from '$lib/index.js';
  import FlexRender from './flex-render.svelte';
  import { LoaderCircle, type Icon } from '@lucide/svelte';
  import { selectColumn } from './columns.js';

  interface Props {
    columns: ColumnDef<TData>[];
    getData: getDataFunction;
    filters?: { [key: string]: { label: string; value: string; icon?: typeof Icon }[] };
    manualPagination?: boolean;
    manualFiltering?: boolean;
    manualSorting?: boolean;
    searchPlaceholder?: string;
    initialPageSize?: number;
    initialSortBy?: { id: string; desc: boolean }[];
    selectedRowsActions?: { label: string; action: (rows: Row<TData>[]) => void }[];
    onRowClick?: (row: Row<TData>) => void;
  }

  let {
    columns: userColumns,
    getData,
    filters,
    manualPagination = false,
    manualFiltering = false,
    manualSorting = false,
    searchPlaceholder,
    initialPageSize = 10,
    initialSortBy = [],
    selectedRowsActions,
    onRowClick
  }: Props = $props();

  let searchQuery = $state('');
  let rowSelection = $state<RowSelectionState>({});
  let columnVisibility = $state<VisibilityState>({});
  let columnFilters = $state<ColumnFiltersState>([]);
  let sorting = $state<SortingState>(initialSortBy);
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: initialPageSize });

  let data: { data: TData[]; total: number } | undefined = $state(undefined);
  let queryState = $state('');

  let columns = [
    ...(selectedRowsActions !== undefined ? [selectColumn as ColumnDef<TData>] : []),
    ...userColumns.map((col) => {
      if (col.header === undefined)
        col.header = ({ column }) => {
          return renderComponent(DataTableColumnHeader, {
            title: (col.meta as any)?.name ?? column.id,
            column
          });
        };
      return col;
    })
  ];

  export const fetchData = () => (queryState = '');

  $effect(() => {
    let query = {
      searchQuery,
      sortBy: sorting,
      ...(manualPagination
        ? {
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize
          }
        : {}),
      filters: columnFilters as { id: string; value: string[] }[]
    };
    if (manualPagination) {
      query.pageIndex = pagination.pageIndex;
      query.pageSize = pagination.pageSize;
    }

    if (queryState === JSON.stringify(query)) return;
    queryState = JSON.stringify(query);
    getData(query).then((result) => {
      data = result;
    });
  });

  const table = createSvelteTable({
    get data() {
      return data?.data ?? [];
    },
    get rowCount() {
      return data?.total ?? data?.data?.length ?? 0;
    },
    state: {
      get sorting() {
        return sorting;
      },
      get columnVisibility() {
        return columnVisibility;
      },
      get rowSelection() {
        return rowSelection;
      },
      get columnFilters() {
        return columnFilters;
      },
      get pagination() {
        return pagination;
      }
    },
    columns: columns,
    enableRowSelection: selectedRowsActions !== undefined,
    onRowSelectionChange: (updater) => {
      rowSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
    },
    onSortingChange: async (updater) => {
      sorting = typeof updater === 'function' ? updater(sorting) : updater;
    },
    onColumnFiltersChange: (updater) => {
      columnFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
    },
    onColumnVisibilityChange: (updater) => {
      columnVisibility = typeof updater === 'function' ? updater(columnVisibility) : updater;
    },
    onPaginationChange: async (updater) => {
      pagination = typeof updater === 'function' ? updater(pagination) : updater;
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination,
    manualFiltering,
    manualSorting
  });
</script>

<div class="h-full w-full space-y-4">
  <DataTableToolbar {searchPlaceholder} bind:searchQuery {table} {filters} />
  <div class="bg-background rounded-md border">
    <Table.Root>
      <Table.Header>
        {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
          <Table.Row>
            {#each headerGroup.headers as header (header.id)}
              <Table.Head colspan={header.colSpan}>
                {#if !header.isPlaceholder}
                  <FlexRender content={header.column.columnDef.header} context={header.getContext()} />
                {/if}
              </Table.Head>
            {/each}
          </Table.Row>
        {/each}
      </Table.Header>
      <Table.Body>
        {#if data === undefined}
          <Table.Row>
            <Table.Cell colspan={columns.length} class="h-48 text-center">
              <LoaderCircle class="inline-flex size-12 animate-spin" />
            </Table.Cell>
          </Table.Row>
        {:else}
          {#each table.getRowModel().rows as row (row.id)}
            <Table.Row
              data-state={row.getIsSelected() && 'selected'}
              onclick={() => onRowClick?.(row)}
              class={onRowClick ? 'cursor-pointer' : ''}
            >
              {#each row.getVisibleCells() as cell (cell.id)}
                <Table.Cell>
                  <FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
                </Table.Cell>
              {/each}
            </Table.Row>
          {:else}
            <Table.Row>
              <Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
            </Table.Row>
          {/each}
        {/if}
      </Table.Body>
    </Table.Root>
  </div>
  <DataTablePagination {table} {selectedRowsActions} />
</div>
