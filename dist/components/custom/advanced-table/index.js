import { createRender } from 'svelte-headless-table';
import CheckBoxTable from './CheckBoxTable.svelte';
import AdvancedTable from './AdvancedTable.svelte';
import RedirectActionTable from './RedirectActionTable.svelte';
import SelectedCountTable from './SelectedCountTable.svelte';
import StatusBadge from './StatusBadge.svelte';
import PaginationTable from './PaginationTable.svelte';
import CellContainer from './CellContainer.svelte';
export { CheckBoxTable, AdvancedTable, RedirectActionTable, SelectedCountTable, StatusBadge, PaginationTable, CellContainer };
export let checkboxColumn = {
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
