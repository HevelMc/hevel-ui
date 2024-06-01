<script>import { Popover as PopoverPrimitive } from "bits-ui";
import { cn, flyAndScale } from "../../../utils.js";
let className = void 0;
export let transition = flyAndScale;
export let transitionConfig = void 0;
export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
		className
	)}
	{...$$restProps}
>
	<slot />
</PopoverPrimitive.Content>
