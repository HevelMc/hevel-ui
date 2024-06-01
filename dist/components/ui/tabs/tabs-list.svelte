<script>import { Tabs as TabsPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<TabsPrimitive.List
	class={cn(
		"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
