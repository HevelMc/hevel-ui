<script>import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
export let value = void 0;
</script>

<ContextMenuPrimitive.RadioGroup {...$$restProps} bind:value>
	<slot />
</ContextMenuPrimitive.RadioGroup>
