<script>import { cn } from "@/utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<div bind:this={el} class={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...$$restProps}>
  <slot />
</div>
