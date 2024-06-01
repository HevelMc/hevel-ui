<script>import { cn } from "../../../utils.js";
import CalendarIcon from "lucide-svelte/icons/calendar";
import ChevronLeft from "lucide-svelte/icons/chevron-left";
import ChevronRight from "lucide-svelte/icons/chevron-right";
import {
  getMonthName,
  getMonthYearName,
  includesMonth,
  isAllowed,
  isInRange,
  isSameMonth,
  sortMonths
} from "../month-picker/index.js";
import { Button, Popover } from "../../../index.js";
export let onValueChange = () => {
};
export let value = void 0;
export let maxValue = void 0;
export let minValue = void 0;
export let disabled = false;
export let placeholder = "Select a period";
export let locale = void 0;
let year = value?.[0].year ?? (/* @__PURE__ */ new Date()).getFullYear();
let open = false;
function changeValue(month) {
  if (value?.length != 1) {
    value = [month];
    open = true;
  } else {
    value = [value[0], month];
    value = sortMonths(value);
    onValueChange(value);
    open = true;
  }
}
function getMonthVariant(month) {
  if (includesMonth(value ?? [], month))
    return "default";
  if (value?.length == 2 && isInRange(month, value[0], value[1]))
    return "secondary";
  return "ghost";
}
function getMonthCorner(month) {
  if (isSameMonth(value?.[0], month) && isSameMonth(value?.[1], month))
    return "rounded-md";
  if (isSameMonth(value?.[0], month))
    return "rounded-l-md rounded-r-none";
  if (isSameMonth(value?.[1], month))
    return "rounded-r-md rounded-l-none";
  if (value?.length == 2 && isInRange(month, value[0], value[1]))
    return "rounded-none";
  return "";
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
        {#if !value || value.length == 0}
          {placeholder}
        {:else if value.length > 1}
          {getMonthYearName(value[0], locale)} - {getMonthYearName(value[1], locale)}
        {:else}
          {getMonthYearName(value[0], locale)}
        {/if}
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
        {#key value}
          {#each Array.from({ length: 12 }, (_, i) => i) as month}
            <Button
              variant={getMonthVariant({ year, month })}
              class={cn(
                !isAllowed({ year, month }, minValue, maxValue) && 'text-muted-foreground',
                getMonthCorner({ year, month })
              )}
              disabled={!isAllowed({ year, month }, minValue, maxValue) || disabled}
              on:click={() => changeValue({ year, month })}
            >
              {getMonthName(month, locale)}
            </Button>
          {/each}
        {/key}
      </div>
    </Popover.Content>
  </Popover.Root>
</div>
