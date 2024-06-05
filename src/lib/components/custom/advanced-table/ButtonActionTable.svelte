<script lang="ts">
  import { Button } from '$lib/index.js';

  export let variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" = "default";
  export let content: string = '';
  export let onClick: () => void = () => {};
</script>

<Button variant={variant} on:click={onClick}>
    {content}
</Button>