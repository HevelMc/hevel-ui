<script>import { Button, Command, Popover } from "../../../index.js";
import { cn } from "../../../utils.js";
import Check from "lucide-svelte/icons/check";
import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
import { tick } from "svelte";
import { writable } from "svelte/store";
export let selectPlaceholder = "Select...";
export let noItemPlaceholder = "No item found.";
export let data = [];
export let selectedValue = writable(selectPlaceholder);
let open = false;
let value = "";
function closeAndFocusTrigger(triggerId) {
  open = false;
  tick().then(() => {
    document.getElementById(triggerId)?.focus();
  });
}
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" role="combobox" aria-expanded={open} class="w-[200px] justify-between">
      {data.find((item) => item.value === $selectedValue)?.label ?? selectedValue}
      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[200px] p-0">
    <Command.Root>
      <Command.Input placeholder={selectPlaceholder} />
      <Command.Empty>{noItemPlaceholder}</Command.Empty>
      <Command.Group>
        {#each data as item}
          <Command.Item
            value={item.label}
            onSelect={() => {
              value = item.value;
              closeAndFocusTrigger(ids.trigger);
              selectedValue.set(item.value);
            }}
          >
            <Check class={cn('mr-2 h-4 w-4', value !== item.value && 'text-transparent')} />
            {item.label}
          </Command.Item>
        {/each}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
