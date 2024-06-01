<script>import { flip } from "svelte/animate";
import { createEventDispatcher } from "svelte";
export let list;
export let disabled = false;
let isOver = false;
export let placeholder = "No items found";
const dispatch = createEventDispatcher();
function getDraggedParent(node) {
  if (!node.dataset.index) {
    return getDraggedParent(node.parentNode);
  } else {
    return { ...node.dataset };
  }
}
function onDragStart(e) {
  if (disabled)
    return;
  const dragged = getDraggedParent(e.target);
  e.dataTransfer?.setData("source", dragged?.index.toString());
}
function onDragOver(e) {
  const id = e.target.dataset?.id;
  const dragged = getDraggedParent(e.target);
  isOver = dragged?.id ?? false;
}
function onDragLeave(e) {
  const dragged = getDraggedParent(e.target);
  isOver === dragged.id && (isOver = false);
}
function onDrop(e) {
  isOver = false;
  const dragged = getDraggedParent(e.target);
  reorder({
    from: e.dataTransfer?.getData("source"),
    to: dragged.index
  });
}
const reorder = ({ from, to }) => {
  const newList = [...list];
  newList[from] = [newList[to], newList[to] = newList[from]][0];
  dispatch("sort", newList);
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
        on:dragstart={onDragStart}
        on:dragover|preventDefault={onDragOver}
        on:dragleave={onDragLeave}
        on:drop|preventDefault={onDrop}
        animate:flip={{ duration: 300 }}
      >
        <slot {item} {index} />
      </li>
    {/each}
  </ul>
{:else}
  <p class="my-12 px-8 text-center text-lg font-bold">
    <slot name="no-items-title">{placeholder}</slot>
  </p>
{/if}

<style>
  .over {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-border-opacity: 1;
    border-color: hsl(var(--foreground) / var(--tw-border-opacity))
}
</style>
