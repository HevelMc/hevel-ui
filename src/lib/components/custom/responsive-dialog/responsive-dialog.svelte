<script lang="ts">
  import type { Snippet } from 'svelte';
  import * as Dialog from '../../ui/dialog/index.js';
  import * as Drawer from '../../ui/drawer/index.js';
  import { MediaQuery } from 'runed';

  const desktop = new MediaQuery('(min-width: 748px)');

  interface Props {
    open: boolean;
    trigger?: Snippet<[{ props: Record<string, unknown> }]> | undefined;
    title?: Snippet;
    description?: Snippet;
    children: Snippet;
  }

  let { open = $bindable(), trigger, title, description, children }: Props = $props();
</script>

{#if desktop.matches}
  <Dialog.Root bind:open>
    {#if trigger}
      <Dialog.Trigger child={trigger} />
    {/if}
    <Dialog.Content>
      <Dialog.Header>
        {#if title}
          <Dialog.Title>
            {@render title()}
          </Dialog.Title>
        {/if}
        {#if description}
          <Dialog.Description>
            {@render description()}
          </Dialog.Description>
        {/if}
      </Dialog.Header>
      {@render children()}
    </Dialog.Content>
  </Dialog.Root>
{:else}
  <Drawer.Root bind:open>
    {#if trigger}
      <Drawer.Trigger child={trigger} />
    {/if}
    <Drawer.Content class="flex flex-col gap-5 p-4">
      {#if title}
        <span class="title-small">
          {@render title()}
        </span>
      {/if}
      {#if description}
        <span class="body-tiny">
          {@render description()}
        </span>
      {/if}
      {@render children()}
    </Drawer.Content>
  </Drawer.Root>
{/if}
