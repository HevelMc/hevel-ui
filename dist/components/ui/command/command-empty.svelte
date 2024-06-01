<script>import { Command as CommandPrimitive } from "cmdk-sv";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<CommandPrimitive.Empty class={cn('py-6 text-center text-sm', className)} {...$$restProps}>
  <slot />
</CommandPrimitive.Empty>
