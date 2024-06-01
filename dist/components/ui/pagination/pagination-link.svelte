<script>import { Pagination as PaginationPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
import { buttonVariants } from "@/components/ui/button/index.js";
let className = void 0;
export let page;
export let size = "icon";
export let isActive = false;
export { className as class };
</script>

<PaginationPrimitive.Page
  bind:page
  class={cn(
    buttonVariants({
      variant: isActive ? 'outline' : 'ghost',
      size
    }),
    className
  )}
  {...$$restProps}
  on:click
>
  <slot>{page.value}</slot>
</PaginationPrimitive.Page>
