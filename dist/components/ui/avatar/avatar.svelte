<script>import { Avatar as AvatarPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export let delayMs = void 0;
export { className as class };
</script>

<AvatarPrimitive.Root
  {delayMs}
  class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
  {...$$restProps}
>
  <slot />
</AvatarPrimitive.Root>
