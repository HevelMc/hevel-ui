import type { ColumnDef } from '@tanstack/table-core';
import { DataTableCheckbox } from './index.js';
import { renderComponent } from './index.js';

export const selectColumn: ColumnDef<any> = {
  id: 'select',
  header: ({ table }) =>
    renderComponent(DataTableCheckbox, {
      checked: table.getIsAllPageRowsSelected(),
      onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
      'aria-label': 'Select all',
      class: 'translate-y-[2px]'
    }),
  cell: ({ row }) =>
    renderComponent(DataTableCheckbox, {
      checked: row.getIsSelected(),
      onCheckedChange: (value) => row.toggleSelected(!!value),
      'aria-label': 'Select row',
      class: 'translate-y-[2px]'
    }),
  enableSorting: false,
  enableHiding: false
};
