<script>import { Drawer as DrawerPrimitive } from "vaul-svelte";
export let shouldScaleBackground = true;
export let open = false;
export let activeSnapPoint = void 0;
</script>

<DrawerPrimitive.NestedRoot {shouldScaleBackground} bind:open bind:activeSnapPoint {...$$restProps}>
  <slot />
</DrawerPrimitive.NestedRoot>
