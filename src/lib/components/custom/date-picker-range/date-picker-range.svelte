<script lang="ts">
  import { DateFormatter } from '@internationalized/date';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import type { CalendarMultipleRootProps, WithoutChildrenOrChild } from 'bits-ui';
  import { buttonVariants, Popover, RangeCalendar } from '#lib/components/ui/index.js';
  import { cn, type DateRange } from '#lib/utils.js';

  type Props = WithoutChildrenOrChild<Omit<Omit<CalendarMultipleRootProps, 'value'>, 'type'>> & {
    inputPlaceholder?: string;
    inputClass?: string;
    locale?: Intl.LocalesArgument;
    value?: DateRange;
  };

  let {
    inputPlaceholder = 'Select a period',
    inputClass = '',
    locale,
    value = $bindable(undefined),
    ...restProps
  }: Props = $props();

  const df = new DateFormatter(locale ?? 'fr-FR', { dateStyle: 'long' });
</script>

<Popover.Root>
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
    <CalendarIcon class="mr-2 size-4" />
    {#if value && value.start}
      {#if value.end}
        {df.format(value.start.toDate('UTC'))} - {df.format(value.end.toDate('UTC'))}
      {:else}
        {df.format(value.start.toDate('UTC'))}
      {/if}
    {:else}
      {inputPlaceholder}
    {/if}
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <RangeCalendar type="multiple" bind:value numberOfMonths={1} {...restProps as any} />
  </Popover.Content>
</Popover.Root>
