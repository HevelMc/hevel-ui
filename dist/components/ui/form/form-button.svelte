<script>import * as Button from "@/components/ui/button/index.js";
</script>

<Button.Root type="submit" on:click on:keydown {...$$restProps}>
  <slot />
</Button.Root>
