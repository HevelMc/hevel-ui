<script>import ChevronRight from "lucide-svelte/icons/chevron-right";
import { cn } from "../../../utils.js";
export let el = void 0;
let className = void 0;
export { className as class };
</script>

<li role="presentation" aria-hidden="true" class={cn('[&>svg]:size-3.5', className)} bind:this={el} {...$$restProps}>
  <slot>
    <ChevronRight />
  </slot>
</li>
