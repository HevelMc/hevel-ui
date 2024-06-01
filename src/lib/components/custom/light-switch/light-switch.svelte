<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { type Props, type Events, buttonVariants } from '$lib/components/ui/button/index.js';
  import { DropdownMenu } from '$lib/index.js';
  import { cn } from '$lib/utils.js';
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';

  type $$Props = Props & {
    setMode: (mode: 'dark' | 'light' | 'system') => void;
    resetMode: () => void;
    lightText?: string;
    darkText?: string;
    systemText?: string;
  };
  type $$Events = Events;

  let className: $$Props['class'] = undefined;
  export { className as class };

  export let variant: $$Props['variant'] = 'outline';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];

  export let setMode: $$Props['setMode'];
  export let resetMode: $$Props['resetMode'];

  export let lightText = 'Light';
  export let darkText = 'Dark';
  export let systemText = 'System';
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <ButtonPrimitive.Root
      builders={[...(builders ?? []), builder]}
      class={cn(buttonVariants({ variant, size, className }))}
      type="button"
      {...$$restProps}
    >
      <Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Change theme</span>
    </ButtonPrimitive.Root>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item on:click={() => setMode('light')}>{lightText}</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => setMode('dark')}>{darkText}</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => resetMode()}>{systemText}</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
