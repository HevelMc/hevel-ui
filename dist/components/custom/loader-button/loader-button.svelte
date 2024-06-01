<script>import { Button as ButtonPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
import { Loader2 } from "lucide-svelte";
import { buttonVariants } from "../../ui/button/index.js";
let className = void 0;
export let variant = "default";
export let size = "default";
export let builders = [];
export let onClick;
let loading = false;
export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  disabled={loading || $$restProps.disabled}
  on:click={async () => {
    loading = true;
    try {
      await onClick();
    } finally {
      loading = false;
    }
  }}
>
  {#if loading}
    <Loader2 class="h-6 w-6 animate-spin" />
  {:else}
    <slot />
  {/if}
</ButtonPrimitive.Root>
