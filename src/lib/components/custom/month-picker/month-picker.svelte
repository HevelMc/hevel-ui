<script lang="ts">
  import { cn } from '$lib/utils.js';
  import CalendarIcon from '@lucide/svelte/icons/calendar';
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import { getMonthName, getMonthYearName, isAllowed, type Month } from './index.js';
  import { Button, buttonVariants, Popover } from '$lib/index.js';

  interface Props {
    onValueChange?: (value: Month | undefined) => void;
    value?: Month | undefined;
    maxValue?: Month | undefined;
    minValue?: Month | undefined;
    disabled?: boolean;
    placeholder?: string;
    locale?: Intl.LocalesArgument | undefined;
    inputClass?: string;
  }

  let {
    onValueChange = () => {},
    value = $bindable(undefined),
    maxValue = undefined,
    minValue = undefined,
    disabled = false,
    placeholder = 'Select a month',
    locale = undefined,
    inputClass = ''
  }: Props = $props();

  let year = $state(value?.year ?? new Date().getFullYear());
  let open = $state(false);

  function changeValue(month: Month) {
    value = month;
    onValueChange(value);
    open = false;
  }
</script>

<div class="grid gap-2">
  <Popover.Root bind:open>
    <Popover.Trigger
      class={cn(
        buttonVariants({
          variant: 'outline',
          class: 'justify-start text-left font-normal'
        }),
        !value && 'text-muted-foreground',
        inputClass
      )}
    >
      <CalendarIcon class="mr-2 h-4 w-4" />
      {value ? getMonthYearName(value, locale) : placeholder}
    </Popover.Trigger>
    <Popover.Content class="w-sm flex flex-col gap-2 p-2">
      <div class="flex items-center gap-2">
        <Button variant="outline" onclick={() => (year -= 1)}>
          <ChevronLeft class="h-4 w-4" />
        </Button>
        <span class="flex-1 text-center">{year}</span>
        <Button variant="outline" onclick={() => (year += 1)}>
          <ChevronRight class="h-4 w-4" />
        </Button>
      </div>
      <div class="grid w-full grid-cols-3 gap-y-1">
        {#each Array.from({ length: 12 }, (_, i) => i) as month}
          <Button
            variant={month == value?.month && year == value?.year ? 'default' : 'ghost'}
            class={cn(!isAllowed({ year, month }, minValue, maxValue) && 'text-muted-foreground')}
            disabled={!isAllowed({ year, month }, minValue, maxValue) || disabled}
            onclick={() => changeValue({ year, month })}
          >
            {getMonthName(month, locale)}
          </Button>
        {/each}
      </div>
    </Popover.Content>
  </Popover.Root>
</div>
