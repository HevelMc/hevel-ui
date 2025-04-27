<script lang="ts">
  import { Badge, cn, DataTable, renderComponent, renderSnippet } from '$lib/index.js';
  import { GenericCell, GenericActions } from '$lib/index.js';
  import type { ColumnDef } from '@tanstack/table-core';
  import { ArrowDown, ArrowRight, ArrowUp, CircleCheck, Circle, XCircle, CircleHelp, Clock } from '@lucide/svelte';
  import { data as demoData } from './tasks.js';
  import type { Snippet } from 'svelte';

  let data = demoData;
  let table: DataTable<any>;

  export const columns: ColumnDef<any>[] = [
    {
      meta: { name: 'Task' },
      accessorKey: 'id',
      cell: ({ row }) => {
        return renderComponent(GenericCell, { value: row.getValue('id') as string, classes: 'w-[80px]' });
      },
      enableSorting: false,
      enableHiding: false
    },
    {
      meta: { name: 'Title' },
      accessorKey: 'title',
      cell: ({ row }) => {
        return renderSnippet(titleSnippet as Snippet, { labelValue: row.original.label, title: row.original.title });
      }
    },
    {
      meta: { name: 'Status' },
      accessorKey: 'status',
      cell: ({ row }) => {
        return renderComponent(GenericCell, { value: row.original.status, options: statuses });
      }
    },
    {
      meta: { name: 'Priority' },
      accessorKey: 'priority',
      cell: ({ row }) => {
        return renderComponent(GenericCell, { value: row.original.priority, options: priorities });
      }
    },
    {
      meta: { name: 'Actions ' },
      accessorKey: 'actions',
      header: '',
      cell: ({ row }) => {
        return renderComponent(GenericActions, {
          row,
          actions: [
            {
              label: 'Delete',
              icon: XCircle,
              class: 'text-red-500 data-[highlighted]:text-red-400',
              handler: (row) => {
                data = data.filter((r) => r.id !== row.original.id);
                table.fetchData();
              }
            }
          ]
        });
      }
    }
  ];

  export const labels = [
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature' },
    { value: 'documentation', label: 'Documentation' }
  ];

  const pill = 'px-2 py-1 rounded-lg w-fit';

  export const statuses = [
    { value: 'backlog', label: 'Backlog', icon: CircleHelp, class: cn(pill, 'bg-gray-300/20 text-gray-300') },
    { value: 'todo', label: 'Todo', icon: Circle, class: cn(pill, 'bg-blue-500/20 text-blue-400') },
    { value: 'in progress', label: 'In Progress', icon: Clock, class: cn(pill, 'bg-yellow-500/20 text-yellow-500') },
    { value: 'done', label: 'Done', icon: CircleCheck, class: cn(pill, 'bg-green-500/20 text-green-500') },
    { value: 'canceled', label: 'Canceled', icon: XCircle, class: cn(pill, 'bg-red-500/20 text-red-500') }
  ];

  export const priorities = [
    { label: 'Low', value: 'low', icon: ArrowDown },
    { label: 'Medium', value: 'medium', icon: ArrowRight },
    { label: 'High', value: 'high', icon: ArrowUp }
  ];

  export const filters = {
    status: statuses,
    priority: priorities
  };
</script>

{#snippet titleSnippet({ labelValue, title }: { labelValue: string; title?: string })}
  <div class="flex space-x-2">
    {#if labelValue}
      {@const label = labels.find((l) => l.value === labelValue)?.label}
      <Badge variant="outline">{label}</Badge>
    {/if}
    <span class="max-w-[500px] truncate font-medium">
      {title}
    </span>
  </div>
{/snippet}

<div class="container flex w-full flex-col gap-6 py-8">
  <span class="text-3xl font-bold">Tasks example</span>
  <DataTable
    bind:this={table}
    {columns}
    manualPagination
    manualFiltering
    manualSorting
    searchPlaceholder="Search tasks..."
    getData={async ({ filters, pageIndex, pageSize, searchQuery, sortBy }) => {
      let filteredData = data.filter((row: any) => {
        if (filters.length === 0) return true;
        return filters.every((filter) => {
          return filter.value.includes(row[filter.id]);
        });
      });

      const escapeQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      filteredData = filteredData.filter((row: any) => new RegExp(escapeQuery, 'i').test(row.title));

      if (sortBy.length > 0) {
        filteredData = filteredData.sort((a: any, b: any) => {
          return sortBy.reduce((acc, sort) => {
            if (acc !== 0) return acc;
            return a[sort.id] > b[sort.id] ? (sort.desc ? -1 : 1) : a[sort.id] < b[sort.id] ? (sort.desc ? 1 : -1) : 0;
          }, 0);
        });
      }

      return {
        data: filteredData.slice(pageIndex! * pageSize!, pageIndex! * pageSize! + pageSize!),
        total: filteredData.length
      };
    }}
    selectedRowsActions={[
      {
        label: 'Delete',
        action: (rows) => {
          data = data.filter((row) => !rows.map((r) => r.original.id).includes(row.id));
          table.fetchData();
        }
      }
    ]}
    onRowClick={(row) => console.log(row)}
    {filters}
  />
</div>
