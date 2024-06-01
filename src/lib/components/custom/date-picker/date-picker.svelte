<script lang="ts">
  import { type DateValue } from '@internationalized/date';
  import { cn } from '$lib/utils.js';
  import { Button } from '$lib/index.js';
  import { Popover } from '$lib/index.js';
  import { CalendarIcon } from 'lucide-svelte';
  import { Calendar } from '$lib/index.js';

  export let onValueChange: (value: DateValue | undefined) => void = () => {};
  export let value: DateValue | undefined = undefined;
  export let maxValue: DateValue | undefined = undefined;
  export let minValue: DateValue | undefined = undefined;
  export let disabled: boolean = false;
  export let placeholder: string = 'Select a date';
  export let formatDate: (date: Date) => string = (date) => date.toLocaleDateString();
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
        {value ? formatDate(value.toDate('UTC')) : placeholder}
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0">
      <Calendar bind:value {onValueChange} bind:maxValue bind:minValue bind:disabled />
    </Popover.Content>
  </Popover.Root>
</div>
