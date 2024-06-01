<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<div class={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...$$restProps}>
  <slot />
</div>
