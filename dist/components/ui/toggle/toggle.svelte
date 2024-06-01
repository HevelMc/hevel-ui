<script>import { Toggle as TogglePrimitive } from "bits-ui";
import { toggleVariants } from "./index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export let variant = "default";
export let size = "default";
export let pressed = void 0;
export { className as class };
</script>

<TogglePrimitive.Root
	bind:pressed
	class={cn(toggleVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
>
	<slot />
</TogglePrimitive.Root>
