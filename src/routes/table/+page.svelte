<script lang="ts">
  import { Badge, DataTable, DataTableColumnHeader, renderComponent, renderSnippet } from '$lib/index.js';
  import type { ColumnDef } from '@tanstack/table-core';
  import { ArrowDown, ArrowRight, ArrowUp, CircleCheck, Circle, XCircle, CircleHelp, Clock } from 'lucide-svelte';
  import { data as demoData } from './tasks.js';
  import type { Snippet } from 'svelte';

  let data = demoData;
  let table: DataTable<any>;

  export const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return renderComponent(DataTableColumnHeader, { column, title: 'Task' });
      },
      cell: ({ row }) => {
        return renderSnippet(taskSnippet as Snippet, { name: row.getValue('id') as string });
      },
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'title',
      header: ({ column }) => renderComponent(DataTableColumnHeader, { column, title: 'Title' }),
      cell: ({ row }) => {
        return renderSnippet(titleSnippet as Snippet, { labelValue: row.original.label, title: row.original.title });
      }
    },
    {
      accessorKey: 'status',
      header: ({ column }) => renderComponent(DataTableColumnHeader, { column, title: 'Status' }),
      cell: ({ row }) => {
        return renderSnippet(statusSnippet as Snippet, { value: row.original.status });
      }
    },
    {
      accessorKey: 'priority',
      header: ({ column }) => {
        return renderComponent(DataTableColumnHeader, { title: 'Priority', column });
      },
      cell: ({ row }) => {
        return renderSnippet(prioritySnippet as Snippet, { value: row.original.priority });
      }
    }
  ];

  export const labels = [
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature' },
    { value: 'documentation', label: 'Documentation' }
  ];

  export const statuses = [
    { value: 'backlog', label: 'Backlog', icon: CircleHelp },
    { value: 'todo', label: 'Todo', icon: Circle },
    { value: 'in progress', label: 'In Progress', icon: Clock },
    { value: 'done', label: 'Done', icon: CircleCheck },
    { value: 'canceled', label: 'Canceled', icon: XCircle }
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

{#snippet taskSnippet({ name }: { name: string })}
  <div class="w-[80px]">{name}</div>
{/snippet}

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

{#snippet statusSnippet({ value }: { value: string })}
  {@const Icon = statuses.find((s) => s.value === value)?.icon}
  {@const status = statuses.find((s) => s.value === value)?.label}
  <div class="flex w-[100px] items-center">
    <Icon class="mr-2 size-4 text-muted-foreground" />
    <span>{status}</span>
  </div>
{/snippet}

{#snippet prioritySnippet({ value }: { value: string })}
  {@const Icon = priorities.find((p) => p.value === value)?.icon}
  {@const priority = priorities.find((p) => p.value === value)?.label}
  <div class="flex w-[100px] items-center">
    <Icon class="mr-2 size-4 text-muted-foreground" />
    <span>{priority}</span>
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
    {filters}
  />
</div>
