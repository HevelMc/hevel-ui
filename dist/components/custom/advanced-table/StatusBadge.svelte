<script>export let value;
export let label = void 0;
export let colors;
</script>

<span class="select-none rounded-md px-2 py-1 text-xs {colors[value]}">
  {label ?? value}
</span>
