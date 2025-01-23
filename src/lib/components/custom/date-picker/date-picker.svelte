<script lang="ts">
  import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import * as Popover from '$lib/components/ui/popover/index.js';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import { Calendar } from '$lib/components/ui/calendar/index.js';
  import type { CalendarSingleRootProps, WithoutChildrenOrChild } from 'bits-ui';

  type Props = WithoutChildrenOrChild<Omit<CalendarSingleRootProps, 'type'>> & {
    inputPlaceholder?: string;
    inputClass?: string;
    locale?: Intl.LocalesArgument;
  };

  let {
    inputPlaceholder = 'Select a date',
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
    {value ? df.format(value.toDate(getLocalTimeZone())) : inputPlaceholder}
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <Calendar type="single" bind:value {...restProps as any} />
  </Popover.Content>
</Popover.Root>
