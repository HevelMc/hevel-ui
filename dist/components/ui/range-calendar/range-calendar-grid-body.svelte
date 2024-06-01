<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.GridBody class={cn(className)} {...$$restProps}>
	<slot />
</RangeCalendarPrimitive.GridBody>
