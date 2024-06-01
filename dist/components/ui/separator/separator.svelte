<script>import { Separator as SeparatorPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export let orientation = "horizontal";
export let decorative = void 0;
export { className as class };
</script>

<SeparatorPrimitive.Root
  class={cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)}
  {orientation}
  {decorative}
  {...$$restProps}
/>
