<script lang="ts">
  import EyeNone from 'svelte-radix/EyeNone.svelte';
  import ArrowDown from 'svelte-radix/ArrowDown.svelte';
  import ArrowUp from 'svelte-radix/ArrowUp.svelte';
  import CaretSort from 'svelte-radix/CaretSort.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Column } from '@tanstack/table-core';
  import type { WithoutChildren } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import { Button, DropdownMenu } from '$lib/index.js';

  type Props = HTMLAttributes<HTMLDivElement> & {
    column: Column<any, any>;
    title: string;
  };

  let { column, class: className, title, ...restProps }: WithoutChildren<Props> = $props();
</script>

{#if !column?.getCanSort()}
  <div class={className} {...restProps}>
    {title}
  </div>
{:else}
  <div class={cn('flex items-center', className)} {...restProps}>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button {...props} variant="ghost" size="sm" class="-ml-3 h-8 data-[state=open]:bg-accent">
            <span>
              {title}
            </span>
            {#if column.getIsSorted() === 'desc'}
              <ArrowDown class="ml-2 size-4" />
            {:else if column.getIsSorted() === 'asc'}
              <ArrowUp class="ml-2 size-4" />
            {:else}
              <CaretSort class="ml-2 size-4" />
            {/if}
          </Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start">
        <DropdownMenu.Item onclick={() => column.toggleSorting(false)}>
          <ArrowUp class="mr-2 size-3.5 text-muted-foreground/70" />
          Asc
        </DropdownMenu.Item>
        <DropdownMenu.Item onclick={() => column.toggleSorting(true)}>
          <ArrowDown class="mr-2 size-3.5 text-muted-foreground/70" />
          Desc
        </DropdownMenu.Item>
        {#if column.getCanHide()}
          <DropdownMenu.Separator />
          <DropdownMenu.Item onclick={() => column.toggleVisibility(false)}>
            <EyeNone class="mr-2 size-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenu.Item>
        {/if}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
{/if}
