<script lang="ts">
  import { Tooltip as TooltipPrimitive } from 'bits-ui';
  import { cn } from '#lib/utils.js';

  let { ref = $bindable(null), class: className, sideOffset = 4, ...restProps }: TooltipPrimitive.ContentProps = $props();
</script>

<TooltipPrimitive.Content
  bind:ref
  {sideOffset}
  class={cn(
    'bg-popover text-popover-foreground z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95',
    className
  )}
  {...restProps}
/>
