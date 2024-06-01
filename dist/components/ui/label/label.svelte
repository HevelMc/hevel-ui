<script>import { Label as LabelPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<LabelPrimitive.Root
  class={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
  {...$$restProps}
  on:mousedown
>
  <slot />
</LabelPrimitive.Root>
