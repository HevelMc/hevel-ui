<script>import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { buttonVariants } from "../button/index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<AlertDialogPrimitive.Action
	class={cn(buttonVariants(), className)}
	{...$$restProps}
	on:click
	on:keydown
	let:builder
>
	<slot {builder} />
</AlertDialogPrimitive.Action>
