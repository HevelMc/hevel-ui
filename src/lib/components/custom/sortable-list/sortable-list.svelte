<script lang="ts">
  import { flip } from 'svelte/animate';
  import { createEventDispatcher, type Snippet } from 'svelte';

  let isOver: string | boolean = $state(false);
  interface Props {
    list: any[];
    disabled?: boolean;
    placeholder?: string;
    child?: Snippet<[{ item: any; index: number }]>;
  }

  let { list, disabled = false, child, placeholder = 'No items found' }: Props = $props();

  const dispatch = createEventDispatcher();

  function getDraggedParent(node: any) {
    if (!node.dataset.index) {
      return getDraggedParent(node.parentNode);
    } else {
      return { ...node.dataset };
    }
  }

  function onDragStart(e: DragEvent) {
    if (disabled) return;
    const dragged = getDraggedParent(e.target);
    e.dataTransfer?.setData('source', dragged?.index.toString());
  }

  function onDragOver(e: DragEvent) {
    e.preventDefault();
    const id = (e.target as any)?.dataset?.id;
    const dragged = getDraggedParent(e.target);
    isOver = dragged?.id ?? false;
  }

  function onDragLeave(e: DragEvent) {
    const dragged = getDraggedParent(e.target);
    isOver === dragged.id && (isOver = false);
  }

  function onDrop(e: DragEvent) {
    e.preventDefault();
    isOver = false;
    const dragged = getDraggedParent(e.target);
    reorder({
      from: e.dataTransfer?.getData('source'),
      to: dragged.index
    });
  }

  const reorder = ({ from, to }: any) => {
    const newList = [...list];
    newList[from] = [newList[to], (newList[to] = newList[from])][0];

    dispatch('sort', newList);
  };
</script>

{#if list?.length}
  <ul class="flex list-none flex-col items-center p-0">
    {#each list as item, index (item.id)}
      <li
        class="w-full border-2 border-dashed border-transparent transition-all"
        class:over={item.id === isOver}
        data-index={index}
        data-id={item.id}
        draggable={!disabled}
        ondragstart={onDragStart}
        ondragover={onDragOver}
        ondragleave={onDragLeave}
        ondrop={onDrop}
        animate:flip={{ duration: 300 }}
      >
        {#if child}
          {@render child({ item, index })}
        {:else}
          <p class="p-4 text-center">{item.name}</p>
        {/if}
      </li>
    {/each}
  </ul>
{:else}
  <p class="my-12 px-8 text-center text-lg font-bold">
    {placeholder}
  </p>
{/if}

<style lang="postcss">
  .over {
    @apply scale-105 border-foreground;
  }
</style>
