<script>import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export let level = "h3";
export { className as class };
</script>

<AlertDialogPrimitive.Title class={cn('text-lg font-semibold', className)} {level} {...$$restProps}>
  <slot />
</AlertDialogPrimitive.Title>
