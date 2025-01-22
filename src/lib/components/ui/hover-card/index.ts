import { LinkPreview as HoverCardPrimitive } from "bits-ui";

import Content from "./hover-card-content.svelte";
const Root: typeof HoverCardPrimitive.Root = HoverCardPrimitive.Root;
const Trigger: typeof HoverCardPrimitive.Trigger = HoverCardPrimitive.Trigger;

export {
	Root,
	Content,
	Trigger,
	Root as HoverCard,
	Content as HoverCardContent,
	Trigger as HoverCardTrigger,
};
