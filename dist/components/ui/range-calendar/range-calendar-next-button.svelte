<script>import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
import ChevronRight from "lucide-svelte/icons/chevron-right";
import { buttonVariants } from "../button/index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<RangeCalendarPrimitive.NextButton
	on:click
	class={cn(
		buttonVariants({ variant: "outline" }),
		"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
		className
	)}
	{...$$restProps}
	let:builder
>
	<slot {builder}>
		<ChevronRight class="h-4 w-4" />
	</slot>
</RangeCalendarPrimitive.NextButton>
