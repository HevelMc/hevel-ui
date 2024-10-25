<script lang="ts" generics="TData, TValue">
  import CirclePlus from 'lucide-svelte/icons/circle-plus';
  import Check from 'lucide-svelte/icons/check';
  import type { Column } from '@tanstack/table-core';
  import { SvelteSet } from 'svelte/reactivity';
  import { cn } from '$lib/utils.js';
  import { Badge, Button, Command, Popover, Separator } from '$lib/index.js';
  import type { Icon } from 'lucide-svelte';

  type Props<TData, TValue> = {
    column: Column<TData, TValue>;
    title: string;
    options: {
      label: string;
      value: string;
      icon?: typeof Icon;
    }[];
  };

  let { column, title, options }: Props<TData, TValue> = $props();

  const facets = $derived(column?.getFacetedUniqueValues());
  const selectedValues = $derived(new SvelteSet(column?.getFilterValue() as string[]));
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet child({ props })}
      <Button {...props} variant="outline" size="sm" class="h-8 border-dashed">
        <CirclePlus class="mr-2 h-4 w-4" />
        {title}
        {#if selectedValues.size > 0}
          <Separator orientation="vertical" class="mx-2 h-4" />
          <Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
            {selectedValues.size}
          </Badge>
          <div class="hidden space-x-1 lg:flex">
            {#if selectedValues.size > 2}
              <Badge variant="secondary" class="rounded-sm px-1 font-normal">
                {selectedValues.size} selected
              </Badge>
            {:else}
              {#each options.filter((opt) => selectedValues.has(opt.value)) as option}
                <Badge variant="secondary" class="rounded-sm px-1 font-normal">
                  {option.label}
                </Badge>
              {/each}
            {/if}
          </div>
        {/if}
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content class="w-[200px] p-0" align="start">
    <Command.Root>
      <Command.Input placeholder={title} />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group>
          {#each options as option}
            {@const isSelected = selectedValues.has(option.value)}
            <Command.Item
              onSelect={() => {
                if (isSelected) {
                  selectedValues.delete(option.value);
                } else {
                  selectedValues.add(option.value);
                }
                const filterValues = Array.from(selectedValues);
                column?.setFilterValue(filterValues.length ? filterValues : undefined);
              }}
            >
              <div
                class={cn(
                  'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                  isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
                )}
              >
                <Check class={cn('h-4 w-4')} />
              </div>
              {#if option.icon}
                {@const Icon = option.icon}
                <Icon class="mr-2 h-4 w-4 text-muted-foreground" />
              {/if}

              <span>{option.label}</span>
              {#if facets?.get(option.value)}
                <span class="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                  <!-- {facets.get(option.value)} -->
                </span>
              {/if}
            </Command.Item>
          {/each}
        </Command.Group>
        {#if selectedValues.size > 0}
          <Command.Separator />
          <Command.Group>
            <Command.Item onSelect={() => column?.setFilterValue(undefined)} class="justify-center text-center">
              Clear filters
            </Command.Item>
          </Command.Group>
        {/if}
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
