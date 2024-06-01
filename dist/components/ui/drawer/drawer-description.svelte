<script>import { Drawer as DrawerPrimitive } from "vaul-svelte";
import { cn } from "../../../utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<DrawerPrimitive.Description bind:el class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
  <slot />
</DrawerPrimitive.Description>
