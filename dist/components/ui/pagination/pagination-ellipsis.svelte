<script>import Ellipsis from "lucide-svelte/icons/ellipsis";
import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<span aria-hidden class={cn('flex h-9 w-9 items-center justify-center', className)} {...$$restProps}>
  <Ellipsis class="h-4 w-4" />
  <span class="sr-only">More pages</span>
</span>
