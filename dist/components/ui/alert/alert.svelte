<script>import { alertVariants } from "./index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export let variant = "default";
export { className as class };
</script>

<div class={cn(alertVariants({ variant }), className)} {...$$restProps} role="alert">
  <slot />
</div>
