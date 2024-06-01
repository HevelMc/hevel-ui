<script>import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export let inset = void 0;
export { className as class };
</script>

<DropdownMenuPrimitive.Label
	class={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
	{...$$restProps}
>
	<slot />
</DropdownMenuPrimitive.Label>
