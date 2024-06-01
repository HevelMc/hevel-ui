<script>import { Dialog as DialogPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<DialogPrimitive.Title class={cn('text-lg font-semibold leading-none tracking-tight', className)} {...$$restProps}>
  <slot />
</DialogPrimitive.Title>
