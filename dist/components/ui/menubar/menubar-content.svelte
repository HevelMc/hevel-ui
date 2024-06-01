<script>import { Menubar as MenubarPrimitive } from "bits-ui";
import { cn, flyAndScale } from "../../../utils.js";
let className = void 0;
export let sideOffset = 8;
export let alignOffset = -4;
export let align = "start";
export let side = "bottom";
export let transition = flyAndScale;
export let transitionConfig = void 0;
export { className as class };
</script>

<MenubarPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	{align}
	{alignOffset}
	{side}
	class={cn(
		"z-50 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
		className
	)}
	{...$$restProps}
	on:keydown
>
	<slot />
</MenubarPrimitive.Content>
