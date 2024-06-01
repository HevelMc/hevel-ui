<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { Check, Copy } from 'lucide-svelte';
  import { type Props, type Events, buttonVariants } from '$lib/components/ui/button/index.js';
  import { Tooltip } from '$lib/index.js';

  type $$Props = Props & { value: string; tooltipCopy?: string; tooltipCopied?: string };
  type $$Events = Events;

  let className: $$Props['class'] = undefined;

  export let variant: $$Props['variant'] = 'link';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];

  export let tooltipCopy = 'Copy';
  export let tooltipCopied = 'Copied!';

  export { className as class };

  export let value: string;
  let copied: boolean = false;
  let tooltipOpen = false;

  function copy() {
    navigator.clipboard.writeText(value ?? '');
    copied = true;
    setTimeout(() => {
      tooltipOpen = false;
      copied = false;
    }, 5000);
  }
</script>

<Tooltip.Root bind:open={tooltipOpen} closeOnPointerDown={false} openDelay={300}>
  <Tooltip.Trigger>
    <ButtonPrimitive.Root
      {builders}
      class={cn(buttonVariants({ variant, size, className }))}
      type="button"
      {...$$restProps}
      on:click={copy}
    >
      {#if !copied}
        <Copy class="h-4 w-4" />
      {:else}
        <Check class="h-4 w-4" />
      {/if}
    </ButtonPrimitive.Root>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p class={copied ? 'text-green-600 dark:text-green-400' : ''}>{copied ? tooltipCopied : tooltipCopy}</p>
  </Tooltip.Content>
</Tooltip.Root>
