<script>import { Command as CommandPrimitive } from "cmdk-sv";
import { cn } from "../../../utils.js";
export let value = void 0;
let className = void 0;
export { className as class };
</script>

<CommandPrimitive.Root
  class={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className)}
  bind:value
  {...$$restProps}
>
  <slot />
</CommandPrimitive.Root>
