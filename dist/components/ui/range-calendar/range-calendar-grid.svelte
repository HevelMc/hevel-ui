<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.Grid class={cn('w-full border-collapse space-y-1', className)} {...$$restProps}>
  <slot />
</RangeCalendarPrimitive.Grid>
