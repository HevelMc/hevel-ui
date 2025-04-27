<script lang="ts">
  import { onMount } from 'svelte';
  import { getHighlighter, theme } from './index';

  interface Props {
    lang: string;
    code: string;
    class?: string;
  }

  let { lang, code, class: className }: Props = $props();
  let html = $state('');

  onMount(async () => {
    html = (await getHighlighter()).codeToHtml(code, { lang, theme: theme! });
  });
</script>

<div class={className}>
  {@html html}
</div>
