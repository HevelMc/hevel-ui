<script lang="ts">
  import Check from '@lucide/svelte/icons/check';
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
  import { tick } from 'svelte';
  import * as Command from '$lib/components/ui/command/index.js';
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  interface Props {
    items: { label: string; value: string }[];
    value?: string;
    selectPlaceholder?: string;
    searchPlaceholder?: string;
    noResultsPlaceholder?: string;
    popupClasses?: string;
    disabled?: boolean;
    shouldFilter?: boolean;
    oninput?: (value: string) => void;
    onselect?: (value: string) => void;
  }

  let {
    items,
    value = $bindable(''),
    selectPlaceholder = 'Select an item...',
    searchPlaceholder = 'Search...',
    noResultsPlaceholder = 'No results found.',
    popupClasses = '',
    disabled = false,
    shouldFilter = true,
    oninput,
    onselect
  }: Props = $props();

  let open = $state(false);
  let triggerRef = $state<HTMLButtonElement>(null!);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger() {
    open = false;
    tick().then(() => {
      triggerRef.focus();
    });
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger bind:ref={triggerRef}>
    {#snippet child({ props })}
      <Button variant="outline" class="justify-between" {...props} role="combobox" aria-expanded={open} {disabled}>
        <span>{items.find((f) => f.value === value)?.label || selectPlaceholder}</span>
        <ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content class={cn('p-0', popupClasses)}>
    <Command.Root {shouldFilter}>
      <Command.Input placeholder={searchPlaceholder} oninput={(e) => oninput?.((e?.target as any)?.value)} />
      <Command.List>
        <Command.Empty>{noResultsPlaceholder}</Command.Empty>
        <Command.Group>
          {#each items as item (item.value)}
            <Command.Item
              value={item.label}
              onSelect={() => {
                value = item.value;
                closeAndFocusTrigger();
                onselect?.(item.value);
              }}
            >
              <Check class={cn('mr-2 size-4', value !== item.value && 'text-transparent')} />
              {item.label}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
