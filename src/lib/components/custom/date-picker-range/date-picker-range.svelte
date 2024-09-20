<script lang="ts">
  import type { DateRange } from 'bits-ui';
  import { type DateValue } from '@internationalized/date';
  import { cn } from '$lib/utils.js';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import { Button, Popover, RangeCalendar } from '$lib/index.js';

  export let onValueChange: (value: DateRange | undefined) => void = () => {};
  export let minValue: DateValue | undefined = undefined;
  export let maxValue: DateValue | undefined = undefined;
  export let placeholder: string = 'Select a period';
  export let formatDate: (date: Date) => string = (date) => date.toLocaleDateString();

  export let value: DateRange | undefined = undefined;
  let startValue: DateValue | undefined = undefined;
</script>

<div class="grid gap-2">
  <Popover.Root openFocus>
    <Popover.Trigger asChild let:builder>
      <Button
        variant="outline"
        class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
        builders={[builder]}
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {#if value && value.start}
          {#if value.end}
            {formatDate(value.start.toDate('UTC'))} - {formatDate(value.end.toDate('UTC'))}
          {:else}
            {formatDate(value.start.toDate('UTC'))}
          {/if}
        {:else if startValue}
          {formatDate(startValue.toDate('UTC'))}
        {:else}
          {placeholder}
        {/if}
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0" align="start">
      <RangeCalendar
        bind:value
        bind:startValue
        bind:minValue
        bind:maxValue
        {onValueChange}
        placeholder={value?.start}
        initialFocus
        numberOfMonths={2}
      />
    </Popover.Content>
  </Popover.Root>
</div>
