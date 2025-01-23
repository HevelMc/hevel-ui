<script lang="ts">
  import { Card, cn, Tabs } from '#lib/index';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    code?: Snippet;
    class?: string;
  }

  const { children, code, class: className }: Props = $props();
</script>

<Tabs.Root value="preview" class="w-full">
  <Tabs.List class="flex w-fit gap-2">
    <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
    <Tabs.Trigger value="code">Code</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="preview">
    <Card.Root class="border-2">
      <Card.Content class={cn('flex flex-col items-center justify-center gap-2', className)}>
        {@render children?.()}
      </Card.Content>
    </Card.Root>
  </Tabs.Content>
  {#if code}
    <Tabs.Content value="code">
      {@render code?.()}
    </Tabs.Content>
  {/if}
</Tabs.Root>
