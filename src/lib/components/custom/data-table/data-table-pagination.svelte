<script lang="ts" generics="TData">
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";
  import DoubleArrowRight from "@lucide/svelte/icons/chevrons-right";
  import DoubleArrowLeft from "@lucide/svelte/icons/chevrons-left";
  import type { Table, Row } from "@tanstack/table-core";
  import { Select, Button, DropdownMenu } from "$lib/index.js";
  import { MoreVerticalIcon } from "@lucide/svelte";

  interface Props {
    table: Table<TData>;
    selectedRowsActions?: { label: string; action: (rows: Row<TData>[]) => void }[];
  }

  let { table, selectedRowsActions }: Props = $props();
</script>

<div class="flex items-center justify-between px-2">
  <div class="flex items-center gap-2 text-sm text-muted-foreground">
    {#if selectedRowsActions !== undefined}
      <span>
        {table.getFilteredSelectedRowModel().rows.length} of
        {table.getFilteredRowModel().rows.length} row(s) selected
      </span>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="ghost" size="icon" class="size-8">
            <span class="sr-only">Actions</span>
            <MoreVerticalIcon class="size-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side="bottom">
          <DropdownMenu.Group>
            <DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
            <DropdownMenu.Separator />
            {#each selectedRowsActions as { label, action } (label)}
              <DropdownMenu.Item
                onclick={() => {
                  action(table.getFilteredSelectedRowModel().rows);
                  table.resetRowSelection();
                }}
              >
                {label}
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {/if}
  </div>
  <div class="flex items-center space-x-6 lg:space-x-8">
    <div class="flex items-center space-x-2">
      <p class="text-sm font-medium">Rows per page</p>
      <Select.Root
        type="single"
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <Select.Trigger class="h-8 w-[70px]">
          {String(table.getState().pagination.pageSize)}
        </Select.Trigger>
        <Select.Content side="top">
          {#each [10, 20, 30, 40, 50] as pageSize (pageSize)}
            <Select.Item value={`${pageSize}`}>
              {pageSize}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
    <div class="flex w-[100px] items-center justify-center text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of
      {table.getPageCount()}
    </div>
    <div class="flex items-center space-x-2">
      <Button
        variant="outline"
        class="hidden size-8 p-0 lg:flex"
        onclick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <span class="sr-only">Go to first page</span>
        <DoubleArrowLeft class="size-4" />
      </Button>
      <Button variant="outline" class="size-8 p-0" onclick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        <span class="sr-only">Go to previous page</span>
        <ChevronLeft class="size-4" />
      </Button>
      <Button variant="outline" class="size-8 p-0" onclick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        <span class="sr-only">Go to next page</span>
        <ChevronRight class="size-4" />
      </Button>
      <Button
        variant="outline"
        class="hidden size-8 p-0 lg:flex"
        onclick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <span class="sr-only">Go to last page</span>
        <DoubleArrowRight class="size-4" />
      </Button>
    </div>
  </div>
</div>
