<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import { Button } from '$lib/index.js';

  export let url: string;
</script>

<Button variant="ghost" size="icon" class="relative h-8 w-8 p-0" href={url}>
  <ChevronRight class="h-4 w-4" />
</Button>
