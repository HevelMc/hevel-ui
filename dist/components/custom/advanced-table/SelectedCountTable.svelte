<script>export let tableModel;
const { pluginStates, rows } = tableModel;
const selectedDataIds = pluginStates.select.selectedDataIds;
</script>

<div class="text-muted-foreground flex-1 text-sm">
  {Object.keys($selectedDataIds).length} of{' '}
  {$rows.length} row(s) selected.
</div>
