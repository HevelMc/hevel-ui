<script>import { Avatar as AvatarPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<AvatarPrimitive.Fallback
	class={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
	{...$$restProps}
>
	<slot />
</AvatarPrimitive.Fallback>
