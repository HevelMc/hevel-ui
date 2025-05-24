<script lang="ts">
  import type { ButtonProps } from '$lib/components/ui/button/index.js';
  import Button from '$lib/components/ui/button/button.svelte';
  import { Sun, Moon } from '@lucide/svelte';
  import { DropdownMenu } from '$lib/components/ui/index.js';

  interface Props extends ButtonProps {
    setMode: (mode: 'dark' | 'light' | 'system') => void;
    resetMode: () => void;
    lightText?: string;
    darkText?: string;
    systemText?: string;
  }

  let {
    children,
    onclick,
    setMode,
    resetMode,
    lightText = 'Light',
    darkText = 'Dark',
    systemText = 'System',
    ...restProps
  }: Props = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button {...props} {...restProps}>
        <Sun class="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon class="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span class="sr-only">Change theme</span>
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={() => setMode('light')}>{lightText}</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => setMode('dark')}>{darkText}</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>{systemText}</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
