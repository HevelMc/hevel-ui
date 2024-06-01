<script>import * as ResizablePrimitive from "paneforge";
import { cn } from "@/utils.js";
let className = void 0;
export let direction;
export let paneGroup = void 0;
export let el = void 0;
export { className as class };
</script>

<ResizablePrimitive.PaneGroup
  bind:el
  bind:paneGroup
  {direction}
  class={cn('flex h-full w-full data-[direction=vertical]:flex-col', className)}
  {...$$restProps}
>
  <slot />
</ResizablePrimitive.PaneGroup>
