<script>import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export let value = void 0;
export { className as class };
</script>

<RadioGroupPrimitive.Root bind:value class={cn('grid gap-2', className)} {...$$restProps}>
  <slot />
</RadioGroupPrimitive.Root>
