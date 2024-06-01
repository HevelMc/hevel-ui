<script>import { badgeVariants } from "./index.js";
import { cn } from "../../../utils.js";
let className = void 0;
export let href = void 0;
export let variant = "default";
export { className as class };
</script>

<svelte:element this={href ? 'a' : 'span'} {href} class={cn(badgeVariants({ variant, className }))} {...$$restProps}>
  <slot />
</svelte:element>
