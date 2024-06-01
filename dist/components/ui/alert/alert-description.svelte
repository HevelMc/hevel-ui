<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<div class={cn('text-sm [&_p]:leading-relaxed', className)} {...$$restProps}>
  <slot />
</div>
