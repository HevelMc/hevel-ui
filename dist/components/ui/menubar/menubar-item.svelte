<script>import { Menubar as MenubarPrimitive } from "bits-ui";
import { cn } from "@/utils.js";
let className = void 0;
export let inset = void 0;
export { className as class };
</script>

<MenubarPrimitive.Item
  class={cn(
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
    inset && 'pl-8',
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerleave
  on:pointermove
  on:pointerdown
>
  <slot />
</MenubarPrimitive.Item>
