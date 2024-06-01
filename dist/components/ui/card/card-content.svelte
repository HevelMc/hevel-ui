<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<div class={cn('p-6 pt-0', className)} {...$$restProps}>
  <slot />
</div>
