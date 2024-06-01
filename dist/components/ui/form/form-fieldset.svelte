<script context="module"></script>

<script generics="T extends Record<string, unknown>, U extends FormPath<T>">import * as FormPrimitive from "formsnap";
import { cn } from "@/utils.js";
export let form;
export let name;
let className = void 0;
export { className as class };
</script>

<FormPrimitive.Fieldset {form} {name} let:constraints let:errors let:tainted let:value class={cn('space-y-2', className)}>
  <slot {constraints} {errors} {tainted} {value} />
</FormPrimitive.Fieldset>
