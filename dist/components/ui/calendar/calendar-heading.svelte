<script>import { Calendar as CalendarPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<CalendarPrimitive.Heading let:headingValue class={cn('text-sm font-medium', className)} {...$$restProps}>
  <slot {headingValue}>
    {headingValue}
  </slot>
</CalendarPrimitive.Heading>
