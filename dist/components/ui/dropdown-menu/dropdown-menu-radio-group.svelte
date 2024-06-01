<script>import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
export let value = void 0;
</script>

<DropdownMenuPrimitive.RadioGroup {...$$restProps} bind:value>
  <slot />
</DropdownMenuPrimitive.RadioGroup>
