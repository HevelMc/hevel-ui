import { createRender } from 'svelte-headless-table';
import CheckBoxTable from './CheckBoxTable.svelte';
import AdvancedTable from './AdvancedTable.svelte';
import RedirectActionTable from './RedirectActionTable.svelte';
import SelectedCountTable from './SelectedCountTable.svelte';
import StatusBadge from './StatusBadge.svelte';
import PaginationTable from './PaginationTable.svelte';
import CellContainer from './CellContainer.svelte';
import ButtonActionTable from './ButtonActionTable.svelte';

export {
  CheckBoxTable,
  AdvancedTable,
  RedirectActionTable,
  SelectedCountTable,
  StatusBadge,
  PaginationTable,
  CellContainer,
  ButtonActionTable,
  createRender
};

export type Column = {
  id: string;
  accessor?: ((item: any) => any) | string;
  header: ((item: any, { pluginStates }: any) => any) | string;
  cell: (item: any, { pluginStates }: any) => any;
  sortKey?: string;
  filterable?: boolean;
  filterKey?: string;
  alignment?: string;
};

export let checkboxColumn: Column = {
  id: 'checkbox',
  header: (_, { pluginStates }) => {
    const { allPageRowsSelected } = pluginStates.select;
    return createRender(CheckBoxTable, {
      checked: allPageRowsSelected
    });
  },
  cell: ({ row }, { pluginStates }) => {
    const { getRowState } = pluginStates.select;
    const { isSelected } = getRowState(row);
    return createRender(CheckBoxTable, {
      checked: isSelected
    });
  }
};

export type getDataFunction = ({
  pageIndex,
  pageSize,
  sortBy,
  filter,
  searchQuery
}: {
  pageIndex?: number;
  pageSize?: number;
  sortBy?: {
    id: string;
    order: 'asc' | 'desc';
  };
  filter?: string;
  searchQuery?: string;
}) => Promise<{
  data: any[];
  total: number;
}>;
