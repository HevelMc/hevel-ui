<script lang="ts">
  import type { ButtonProps } from "$lib/components/ui/button/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Tooltip } from "$lib/index.js";
  import Copy from "@lucide/svelte/icons/copy";
  import Check from "@lucide/svelte/icons/check";

  interface Props extends ButtonProps {
    tooltipCopy?: string;
    tooltipCopied?: string;
    value: string;
  }

  let copied = $state(false);
  let tooltipOpen = $state(false);

  let { onclick, value = $bindable(), tooltipCopy = "Copy", tooltipCopied = "Copied!", ...restProps }: Props = $props();

  function copy() {
    navigator.clipboard.writeText(value ?? "");
    copied = true;
    if (!tooltipOpen) tooltipOpen = true;
    setTimeout(() => {
      tooltipOpen = false;
      copied = false;
    }, 5000);
  }
</script>

<Tooltip.Provider disableCloseOnTriggerClick delayDuration={300}>
  <Tooltip.Root bind:open={tooltipOpen}>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        <Button {...props} {...restProps} onclick={copy}>
          {#if !copied}
            <Copy class="h-4 w-4" />
          {:else}
            <Check class="h-4 w-4" />
          {/if}
        </Button>
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p class={copied ? "text-green-600 dark:text-green-400" : ""}>{copied ? tooltipCopied : tooltipCopy}</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
