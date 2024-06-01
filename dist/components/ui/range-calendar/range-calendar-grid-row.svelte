<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.GridRow class={cn('flex', className)} {...$$restProps}>
  <slot />
</RangeCalendarPrimitive.GridRow>
