import { SvelteComponent } from "svelte";
import * as Button from "../button/index.js";
declare const __propDef: {
    props: Button.Props;
    slots: {
        default: {};
    };
    events: import("bits-ui").ButtonEvents;
};
export type FormButtonProps = typeof __propDef.props;
export type FormButtonEvents = typeof __propDef.events;
export type FormButtonSlots = typeof __propDef.slots;
export default class FormButton extends SvelteComponent<FormButtonProps, FormButtonEvents, FormButtonSlots> {
}
export {};
