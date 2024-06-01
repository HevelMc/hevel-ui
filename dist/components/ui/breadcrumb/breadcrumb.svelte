<script>export let el = void 0;
let className = void 0;
export { className as class };
</script>

<nav class={className} bind:this={el} aria-label="breadcrumb" {...$$restProps}>
  <slot />
</nav>
