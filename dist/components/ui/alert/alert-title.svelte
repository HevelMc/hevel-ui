<script>import { cn } from "../../../utils.js";
let className = void 0;
export let level = "h5";
export { className as class };
</script>

<svelte:element
	this={level}
	class={cn("mb-1 font-medium leading-none tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
