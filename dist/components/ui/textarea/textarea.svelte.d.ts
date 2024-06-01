import { SvelteComponent } from "svelte";
import type { HTMLTextareaAttributes } from 'svelte/elements';
import type { TextareaEvents } from './index.js';
declare const __propDef: {
    props: HTMLTextareaAttributes;
    slots: {};
    events: TextareaEvents;
};
export type TextareaProps = typeof __propDef.props;
type TextareaEvents_ = typeof __propDef.events;
export { TextareaEvents_ as TextareaEvents };
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponent<TextareaProps, TextareaEvents_, TextareaSlots> {
}
