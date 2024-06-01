<script>import { getFormControl } from "formsnap";
import { cn } from "@/utils.js";
import { Label } from "@/components/ui/label/index.js";
let className = void 0;
export { className as class };
const { labelAttrs } = getFormControl();
</script>

<Label {...$labelAttrs} class={cn('data-[fs-error]:text-destructive', className)} {...$$restProps}>
  <slot {labelAttrs} />
</Label>
