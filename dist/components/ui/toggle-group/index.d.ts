import type { VariantProps } from 'tailwind-variants';
import Root from './toggle-group.svelte';
import Item from './toggle-group-item.svelte';
import type { toggleVariants } from '../toggle/index.js';
export type ToggleVariants = VariantProps<typeof toggleVariants>;
export declare function setToggleGroupCtx(props: ToggleVariants): void;
export declare function getToggleGroupCtx(): ToggleVariants;
export { Root, Item, Root as ToggleGroup, Item as ToggleGroupItem };
