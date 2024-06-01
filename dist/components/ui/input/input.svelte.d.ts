import { SvelteComponent } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
import type { InputEvents } from './index.js';
declare const __propDef: {
    props: HTMLInputAttributes;
    slots: {};
    events: InputEvents;
};
export type InputProps = typeof __propDef.props;
type InputEvents_ = typeof __propDef.events;
export { InputEvents_ as InputEvents };
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents_, InputSlots> {
}
