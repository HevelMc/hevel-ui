<script>import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
import { getToggleGroupCtx } from "./index.js";
import { cn } from "../../../utils.js";
import { toggleVariants } from "../toggle/index.js";
let className = void 0;
export { className as class };
export let variant = "default";
export let size = "default";
export let value;
const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
	class={cn(
		toggleVariants({
			variant: ctx.variant || variant,
			size: ctx.size || size,
		}),
		className
	)}
	{value}
	{...$$restProps}
>
	<slot />
</ToggleGroupPrimitive.Item>
