<script>import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
import { setToggleGroupCtx } from "./index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
export let variant = "default";
export let size = "default";
export let value = void 0;
setToggleGroupCtx({
  variant,
  size
});
</script>

<ToggleGroupPrimitive.Root
  class={cn('flex items-center justify-center gap-1', className)}
  bind:value
  {...$$restProps}
  let:builder
>
  <slot {builder} />
</ToggleGroupPrimitive.Root>
