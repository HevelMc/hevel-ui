<script>import {} from "@internationalized/date";
import { cn } from "../../../utils.js";
import { CalendarIcon } from "lucide-svelte";
import { Button, Popover, RangeCalendar } from "../../../index.js";
export let onValueChange = () => {
};
export let maxValue = void 0;
export let placeholder = "Select a period";
export let formatDate = (date) => date.toLocaleDateString();
export let value = void 0;
let startValue = void 0;
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
        bind:maxValue
        {onValueChange}
        placeholder={value?.start}
        initialFocus
        numberOfMonths={2}
      />
    </Popover.Content>
  </Popover.Root>
</div>
