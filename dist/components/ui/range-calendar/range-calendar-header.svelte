<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.Header class={cn('relative flex w-full items-center justify-between pt-1', className)} {...$$restProps}>
  <slot />
</RangeCalendarPrimitive.Header>
