<script lang="ts">
  import { Button } from '$lib/index.js';

  export let className: string = '';
  export let content: string = '';
  export let href: string = '';
  export { className as class };
</script>

<div class={className} {...$$restProps}>
  {#if href}
    <Button {href} variant="link" class="p-0">
      {content}
    </Button>
  {:else}
    {content}
  {/if}
</div>
