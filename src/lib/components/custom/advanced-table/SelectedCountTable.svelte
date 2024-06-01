<script lang="ts">
  import type { TableViewModel } from 'svelte-headless-table';
  import type { AnyPlugins } from 'svelte-headless-table/plugins';

  export let tableModel: TableViewModel<any, AnyPlugins>;

  const { pluginStates, rows } = tableModel;

  const selectedDataIds = pluginStates.select.selectedDataIds;
</script>

<div class="text-muted-foreground flex-1 text-sm">
  {Object.keys($selectedDataIds).length} of{' '}
  {$rows.length} row(s) selected.
</div>
