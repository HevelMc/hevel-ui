<script>import { Button as ButtonPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
import Copy from "lucide-svelte/icons/copy";
import Check from "lucide-svelte/icons/check";
import { buttonVariants } from "../../ui/button/index.js";
import { Tooltip } from "../../../index.js";
let className = void 0;
export let variant = "outline";
export let size = "default";
export let builders = [];
export let tooltipCopy = "Copy";
export let tooltipCopied = "Copied!";
export { className as class };
export let value;
let copied = false;
let tooltipOpen = false;
function copy() {
  navigator.clipboard.writeText(value ?? "");
  copied = true;
  setTimeout(() => {
    tooltipOpen = false;
    copied = false;
  }, 5e3);
}
</script>

<Tooltip.Root bind:open={tooltipOpen} closeOnPointerDown={false} openDelay={300}>
  <Tooltip.Trigger>
    <ButtonPrimitive.Root
      {builders}
      class={cn(buttonVariants({ variant, size, className }))}
      type="button"
      {...$$restProps}
      on:click={copy}
    >
      {#if !copied}
        <Copy class="h-4 w-4" />
      {:else}
        <Check class="h-4 w-4" />
      {/if}
    </ButtonPrimitive.Root>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p class={copied ? 'text-green-600 dark:text-green-400' : ''}>{copied ? tooltipCopied : tooltipCopy}</p>
  </Tooltip.Content>
</Tooltip.Root>
