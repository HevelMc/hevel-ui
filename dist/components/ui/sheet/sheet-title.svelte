<script>import { Dialog as SheetPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<SheetPrimitive.Title class={cn('text-lg font-semibold text-foreground', className)} {...$$restProps}>
  <slot />
</SheetPrimitive.Title>
