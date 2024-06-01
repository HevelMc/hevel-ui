<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<tfoot class={cn('bg-primary font-medium text-primary-foreground', className)} {...$$restProps}>
  <slot />
</tfoot>
