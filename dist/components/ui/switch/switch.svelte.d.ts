import { SvelteComponent } from "svelte";
import { Switch as SwitchPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SwitchPrimitive.Props;
    slots: {};
    events: SwitchPrimitive.Events;
};
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
