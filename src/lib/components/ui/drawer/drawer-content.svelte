<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import DrawerOverlay from './drawer-overlay.svelte';
  import { cn } from '$lib/utils.js';
  import { Button } from '../button/index.js';
  import { XIcon } from 'lucide-svelte';

  let {
    ref = $bindable(null),
    class: className,
    children,
    open = $bindable(false),
    ...restProps
  }: DrawerPrimitive.ContentProps & { open?: boolean } = $props();
</script>

<DrawerPrimitive.Portal>
  <DrawerOverlay />
  <DrawerPrimitive.Content
    bind:ref
    class={cn('bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border', className)}
    {...restProps}
  >
    <Button size="icon" class="absolute right-2 top-2 h-8 w-8" variant="link" onclick={() => (open = false)}>
      <XIcon class="h-4 w-4" />
    </Button>
    {@render children?.()}
  </DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
