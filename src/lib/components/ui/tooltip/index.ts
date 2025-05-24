import { Tooltip as TooltipPrimitive } from "bits-ui";
import Trigger from "./tooltip-trigger.svelte";
import Content from "./tooltip-content.svelte";

const Root: typeof TooltipPrimitive.Root = TooltipPrimitive.Root;
const Provider: typeof TooltipPrimitive.Provider = TooltipPrimitive.Provider;
const Portal: typeof TooltipPrimitive.Portal = TooltipPrimitive.Portal;

export {
	Root,
	Trigger,
	Content,
	Provider,
	Portal,
	//
	Root as Tooltip,
	Content as TooltipContent,
	Trigger as TooltipTrigger,
	Provider as TooltipProvider,
	Portal as TooltipPortal,
};
