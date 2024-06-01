<script>import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { cn, flyAndScale } from "../../../utils.js";
let className = void 0;
export let transition = flyAndScale;
export let transitionConfig = {
  x: -10,
  y: 0
};
export { className as class };
</script>

<DropdownMenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		"z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none",
		className
	)}
	{...$$restProps}
	on:keydown
	on:focusout
	on:pointermove
>
	<slot />
</DropdownMenuPrimitive.SubContent>
