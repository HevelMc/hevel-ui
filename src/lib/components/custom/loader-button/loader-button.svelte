<script lang="ts">
  import type { ButtonProps } from '$lib/components/ui/button/index.js';
  import Button from '$lib/components/ui/button/button.svelte';
  import { LoaderCircle } from 'lucide-svelte';

  interface Props extends ButtonProps {
    loading?: boolean;
  }

  let { children, onclick, loading = $bindable(false), ...restProps }: Props = $props();
</script>

<Button
  {...restProps}
  onclick={async (ev) => {
    loading = true;
    try {
      await onclick?.(ev as any);
    } finally {
      loading = false;
    }
  }}
>
  {#if loading}
    <LoaderCircle class="h-6 w-6 animate-spin" />
  {:else}
    {@render children?.()}
  {/if}
</Button>
