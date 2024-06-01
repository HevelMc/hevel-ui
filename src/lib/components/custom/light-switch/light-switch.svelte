<script lang="ts">
  import { Button, DropdownMenu } from '$lib/index.js';
  import { Sun, Moon } from 'lucide-svelte';
  import { setMode, resetMode } from 'mode-watcher';

  export let lightText = 'Light';
  export let darkText = 'Dark';
  export let systemText = 'System';
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" class="h-full">
      <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Change theme</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item on:click={() => setMode('light')}>{lightText}</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => setMode('dark')}>{darkText}</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => resetMode()}>{systemText}</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
