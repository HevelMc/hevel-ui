<script>import { Drawer as DrawerPrimitive } from "vaul-svelte";
import { cn } from "../../../utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<DrawerPrimitive.Title bind:el class={cn('text-lg font-semibold leading-none tracking-tight', className)} {...$$restProps}>
  <slot />
</DrawerPrimitive.Title>
