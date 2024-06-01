<script>import { cn } from "../../../utils.js";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-svelte";
import { getMonthName, getMonthYearName, isAllowed } from "./index.js";
import { Button, Popover } from "../../../index.js";
export let onValueChange = () => {
};
export let value = void 0;
export let maxValue = void 0;
export let minValue = void 0;
export let disabled = false;
export let placeholder = "Select a month";
export let locale = void 0;
let year = value?.year ?? (/* @__PURE__ */ new Date()).getFullYear();
let open = false;
function changeValue(month) {
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
