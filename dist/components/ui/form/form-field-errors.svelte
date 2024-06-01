<script>import * as FormPrimitive from "formsnap";
import { cn } from "../../../utils.js";
let className = void 0;
export { className as class };
export let errorClasses = void 0;
</script>

<FormPrimitive.FieldErrors
	class={cn("text-sm font-medium text-destructive", className)}
	{...$$restProps}
	let:errors
	let:fieldErrorsAttrs
	let:errorAttrs
>
	<slot {errors} {fieldErrorsAttrs} {errorAttrs}>
		{#each errors as error}
			<div {...errorAttrs} class={cn(errorClasses)}>{error}</div>
		{/each}
	</slot>
</FormPrimitive.FieldErrors>
