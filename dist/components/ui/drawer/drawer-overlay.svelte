<script>import { Drawer as DrawerPrimitive } from "vaul-svelte";
import { cn } from "../../../utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<DrawerPrimitive.Overlay
	bind:el
	class={cn("fixed inset-0 z-50 bg-black/80", className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Overlay>
