<script>import { Button as ButtonPrimitive } from "bits-ui";
import { buttonVariants } from "../../ui/button/index.js";
import { DropdownMenu } from "../../../index.js";
import { cn } from "../../../utils.js";
import Sun from "lucide-svelte/icons/sun";
import Moon from "lucide-svelte/icons/moon";
let className = void 0;
export { className as class };
export let variant = "outline";
export let size = "default";
export let builders = [];
export let setMode;
export let resetMode;
export let lightText = "Light";
export let darkText = "Dark";
export let systemText = "System";
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
