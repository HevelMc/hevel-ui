<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<div class="relative w-full overflow-auto">
  <table class={cn('w-full caption-bottom text-sm', className)} {...$$restProps}>
    <slot />
  </table>
</div>
