<script>import { cn } from "../../../utils.js";
export let href = void 0;
export let el = void 0;
export let asChild = false;
let className = void 0;
export { className as class };
let attrs;
$:
  attrs = {
    class: cn("transition-colors hover:text-foreground", className),
    href,
    ...$$restProps
  };
</script>

{#if asChild}
  <slot {attrs} />
{:else}
  <a bind:this={el} {...attrs} {href}>
    <slot {attrs} />
  </a>
{/if}
