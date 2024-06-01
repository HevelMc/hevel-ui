<script>import { Dialog as SheetPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<SheetPrimitive.Description class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
  <slot />
</SheetPrimitive.Description>
