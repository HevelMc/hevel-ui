<script>import { Button } from "../../../index.js";
export let className = "";
export let content = "";
export let href = "";
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
