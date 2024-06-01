<script>import { cn } from "@/utils.js";
let className = void 0;
export { className as class };
</script>

<th
  class={cn('h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className)}
  {...$$restProps}
>
  <slot />
</th>
