<script>import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { buttonVariants } from "../button/index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<AlertDialogPrimitive.Cancel
  class={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
  {...$$restProps}
  on:click
  on:keydown
  let:builder
>
  <slot {builder} />
</AlertDialogPrimitive.Cancel>
