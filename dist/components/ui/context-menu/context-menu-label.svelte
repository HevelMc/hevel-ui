<script>import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export let inset = void 0;
export { className as class };
</script>

<ContextMenuPrimitive.Label
  class={cn('px-2 py-1.5 text-sm font-semibold text-foreground', inset && 'pl-8', className)}
  {...$$restProps}
>
  <slot />
</ContextMenuPrimitive.Label>
