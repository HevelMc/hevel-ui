<script lang="ts">
  import { Button, cn } from '$lib/index.js';
  import { Icon } from 'lucide-svelte';

  interface Props {
    value: string;
    classes?: string;
    options?: { value: string; label: string; icon: typeof Icon }[];
    href?: string;
  }

  let { value, classes, options, href }: Props = $props();
</script>

<div class={cn('flex items-center gap-2 truncate', classes)}>
  {#if options}
    {@const option = options.find((o) => o.value === value)}
    {#if option?.icon}
      <option.icon class="h-4 w-4" />
    {/if}
    <span>{option?.label ?? value}</span>
  {:else if href}
    <Button variant="link" {href} size="link">
      <span>{value}</span>
    </Button>
  {:else}
    <span>{value}</span>
  {/if}
</div>
