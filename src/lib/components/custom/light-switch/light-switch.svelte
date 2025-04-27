<script lang="ts">
  import type { ButtonProps } from "$lib/components/ui/button/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Sun, Moon } from "@lucide/svelte";
  import { DropdownMenu } from "$lib/components/ui/index.js";

  interface Props extends ButtonProps {
    setMode: (mode: "dark" | "light" | "system") => void;
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
    lightText = "Light",
    darkText = "Dark",
    systemText = "System",
    ...restProps
  }: Props = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button {...props} {...restProps}>
        <Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Change theme</span>
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onclick={() => setMode("light")}>{lightText}</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => setMode("dark")}>{darkText}</DropdownMenu.Item>
    <DropdownMenu.Item onclick={() => resetMode()}>{systemText}</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
