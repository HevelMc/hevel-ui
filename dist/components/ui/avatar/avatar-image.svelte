<script>import { Avatar as AvatarPrimitive } from "bits-ui";
import { cn } from "../../../utils.js";
let className = void 0;
export let src = void 0;
export let alt = void 0;
export { className as class };
</script>

<AvatarPrimitive.Image {src} {alt} class={cn('aspect-square h-full w-full', className)} {...$$restProps} />
