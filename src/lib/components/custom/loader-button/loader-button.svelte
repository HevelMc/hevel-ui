<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import LoaderCircle from 'lucide-svelte/icons/loader-circle';
  import { type Props, type Events, buttonVariants } from '$lib/components/ui/button/index.js';

  type $$Props = Props & { onClick: () => Promise<void> | void };
  type $$Events = Events;

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];

  export let onClick: () => Promise<void> | void;

  let loading = false;

  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  disabled={loading || $$restProps.disabled}
  on:click={async () => {
    loading = true;
    try {
      await onClick();
    } finally {
      loading = false;
    }
  }}
>
  {#if loading}
    <LoaderCircle class="h-6 w-6 animate-spin" />
  {:else}
    <slot />
  {/if}
</ButtonPrimitive.Root>
