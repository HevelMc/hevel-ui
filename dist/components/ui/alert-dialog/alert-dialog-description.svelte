<script>import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<AlertDialogPrimitive.Description class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
  <slot />
</AlertDialogPrimitive.Description>
