<script lang="ts">
  import { cn } from '$lib/utils.js';
  import LoaderCircle from 'lucide-svelte/icons/loader-circle';
  import type { Snippet } from 'svelte';

  interface Props {
    loading: boolean;
    class?: string;
    children: Snippet;
  }

  let { loading, class: className = '', children }: Props = $props();
</script>

{#if loading}
  <div class={cn('flex h-full min-h-28 w-full flex-col items-center justify-center', className)}>
    <div class="flex flex-col items-center justify-center gap-2">
      <LoaderCircle class="h-12 w-12 animate-spin" />
      <span class="text-xl font-semibold">Chargement...</span>
    </div>
  </div>
{:else}
  {@render children()}
{/if}
