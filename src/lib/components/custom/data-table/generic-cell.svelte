<script lang="ts">
  import { Button, cn } from '$lib/index.js';
  import { Icon } from '@lucide/svelte';

  interface Props {
    value: string;
    classes?: string;
    options?: { value: string; label: string; icon?: typeof Icon; class?: string }[];
    href?: string;
  }

  let { value, classes, options, href }: Props = $props();

  let option = $derived(options?.find((o) => o.value === value));
</script>

<div class={cn('flex items-center gap-2 truncate', classes, option?.class)}>
  {#if options}
    {#if option?.icon}
      <option.icon class="size-4" />
    {/if}
    <span>{option?.label ?? value}</span>
  {:else if href}
    <Button variant="link" {href} class="p-0">
      <span>{value}</span>
    </Button>
  {:else}
    <span>{value}</span>
  {/if}
</div>
