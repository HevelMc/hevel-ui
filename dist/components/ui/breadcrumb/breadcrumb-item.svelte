<script>import { cn } from "@/utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<li bind:this={el} class={cn('inline-flex items-center gap-1.5', className)}>
  <slot />
</li>
