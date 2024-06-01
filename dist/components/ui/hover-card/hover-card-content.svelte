<script>import { LinkPreview as HoverCardPrimitive } from "bits-ui";
import { cn, flyAndScale } from "../../../utils.js";
let className = void 0;
export let transition = flyAndScale;
export let transitionConfig = void 0;
export let align = "center";
export let sideOffset = 4;
export { className as class };
</script>

<HoverCardPrimitive.Content
  {transition}
  {transitionConfig}
  {align}
  {sideOffset}
  class={cn('z-50 mt-3 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className)}
  {...$$restProps}
>
  <slot />
</HoverCardPrimitive.Content>
