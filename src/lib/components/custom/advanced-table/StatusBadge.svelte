<script lang="ts">
  export let value: string;
  export let label: string | undefined = undefined;
  export let colors: { [key: string]: string };
</script>

<span class="select-none rounded-md px-2 py-1 text-xs {colors[value]}">
  {label ?? value}
</span>
