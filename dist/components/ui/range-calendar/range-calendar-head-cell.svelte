<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.HeadCell
  class={cn('w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground', className)}
  {...$$restProps}
>
  <slot />
</RangeCalendarPrimitive.HeadCell>
