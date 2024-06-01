<script>import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<div
	class={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
	{...$$restProps}
>
	<slot />
</div>
