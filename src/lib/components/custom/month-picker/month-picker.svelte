<script lang="ts">
  import { cn } from '$lib/utils.js';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { getMonthName, getMonthYearName, isAllowed, type Month } from './index.js';
  import { Button, Popover } from '$lib/index.js';

  export let onValueChange: (value: Month | undefined) => void = () => {};
  export let value: Month | undefined = undefined;
  export let maxValue: Month | undefined = undefined;
  export let minValue: Month | undefined = undefined;
  export let disabled: boolean = false;
  export let placeholder: string = 'Select a month';
  export let locale: Intl.LocalesArgument | undefined = undefined;

  let year = value?.year ?? new Date().getFullYear();
  let open = false;

  function changeValue(month: Month) {
    value = month;
    onValueChange(value);
    open = false;
  }
</script>

<div class="grid gap-2">
  <Popover.Root openFocus bind:open>
    <Popover.Trigger asChild let:builder>
      <Button
        variant="outline"
        class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
        builders={[builder]}
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {value ? getMonthYearName(value, locale) : placeholder}
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-sm flex flex-col gap-2 p-2">
      <div class="flex items-center gap-2">
        <Button variant="outline" on:click={() => (year -= 1)}>
          <ChevronLeft class="h-4 w-4" />
        </Button>
        <span class="flex-1 text-center">{year}</span>
        <Button variant="outline" on:click={() => (year += 1)}>
          <ChevronRight class="h-4 w-4" />
        </Button>
      </div>
      <div class="grid w-full grid-cols-3 gap-y-1">
        {#each Array.from({ length: 12 }, (_, i) => i) as month}
          <Button
            variant={month == value?.month && year == value?.year ? 'default' : 'ghost'}
            class={cn(!isAllowed({ year, month }, minValue, maxValue) && 'text-muted-foreground')}
            disabled={!isAllowed({ year, month }, minValue, maxValue) || disabled}
            on:click={() => changeValue({ year, month })}
          >
            {getMonthName(month, locale)}
          </Button>
        {/each}
      </div>
    </Popover.Content>
  </Popover.Root>
</div>
