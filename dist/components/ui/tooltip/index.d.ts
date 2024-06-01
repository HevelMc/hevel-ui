import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Content from './tooltip-content.svelte';
declare const Root: typeof TooltipPrimitive.Root;
declare const Trigger: typeof TooltipPrimitive.Trigger;
export { Root, Trigger, Content, Root as Tooltip, Content as TooltipContent, Trigger as TooltipTrigger };
