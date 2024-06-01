<script>import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
</script>

<ul class={cn('flex flex-row items-center gap-1', className)} {...$$restProps}>
  <slot />
</ul>
