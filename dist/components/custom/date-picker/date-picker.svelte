<script>import {} from "@internationalized/date";
import { cn } from "../../../utils.js";
import { Button } from "../../../index.js";
import { Popover } from "../../../index.js";
import { CalendarIcon } from "lucide-svelte";
import { Calendar } from "../../../index.js";
export let onValueChange = () => {
};
export let value = void 0;
export let maxValue = void 0;
export let minValue = void 0;
export let disabled = false;
export let placeholder = "Select a date";
export let formatDate = (date) => date.toLocaleDateString();
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
