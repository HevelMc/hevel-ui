<script>import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<p class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
  <slot />
</p>
