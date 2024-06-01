<script>import { cn } from "../../../utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<div bind:this={el} class={cn("mt-auto flex flex-col gap-2 p-4", className)} {...$$restProps}>
	<slot />
</div>
