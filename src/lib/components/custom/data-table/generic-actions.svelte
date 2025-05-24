<script lang="ts">
  import { Button, DropdownMenu, cn } from '$lib/index';
  import type { Row } from '@tanstack/table-core';
  import { Ellipsis } from '@lucide/svelte';

  interface Props {
    actions: { label: string; icon?: any; class?: string; handler: (row: Row<any>) => void }[];
    row: Row<any>;
    class?: string;
  }

  let { row, actions, class: className }: Props = $props();
</script>

<div class="flex justify-end">
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {#snippet child({ props })}
        <Button {...props} variant="ghost" class="data-[state=open]:bg-muted flex size-8 p-0">
          <Ellipsis class="size-4" />
        </Button>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class={cn('w-[240px]', className)} align="end">
      {#each actions as action}
        <DropdownMenu.Item class={cn('gap-2', action.class)} onclick={() => action.handler(row)}>
          {#if action.icon}
            <action.icon class="size-4" />
          {/if}
          <span>{action.label}</span>
        </DropdownMenu.Item>
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
