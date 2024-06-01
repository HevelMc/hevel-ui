<script>import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<div class={cn("flex flex-col space-y-1.5 p-6", className)} {...$$restProps}>
	<slot />
</div>
