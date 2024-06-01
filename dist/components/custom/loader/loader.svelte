<script>import { cn } from "../../../utils.js";
import LoaderCircle from "lucide-svelte/icons/loader-circle";
export let loading = false;
export let className = "";
export { className as class };
</script>

{#if loading}
  <div class={cn('flex h-full min-h-28 w-full flex-col items-center justify-center', className)}>
    <div class="flex flex-col items-center justify-center gap-2">
      <LoaderCircle class="h-12 w-12 animate-spin" />
      <span class="text-xl font-semibold">Chargement...</span>
    </div>
  </div>
{:else}
  <slot />
{/if}
