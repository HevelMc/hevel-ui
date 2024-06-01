<script>import { cn } from "../../../utils.js";
export let el = void 0;
export let className = void 0;
export { className as class };
</script>

<span
	bind:this={el}
	role="link"
	aria-disabled="true"
	aria-current="page"
	class={cn("font-normal text-foreground", className)}
	{...$$restProps}
>
	<slot />
</span>
