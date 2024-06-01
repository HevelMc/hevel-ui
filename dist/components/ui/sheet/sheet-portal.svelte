<script>import { Dialog as SheetPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<SheetPrimitive.Portal class={cn(className)} {...$$restProps}>
  <slot />
</SheetPrimitive.Portal>
