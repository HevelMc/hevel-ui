import { SvelteComponent } from "svelte";
import { Button as ButtonPrimitive } from 'bits-ui';
import { type Props } from '../../ui/button/index.js';
declare const __propDef: {
    props: Props & {
        value: string;
        lightText?: string | undefined;
        darkText?: string | undefined;
        systemText?: string | undefined;
    };
    slots: {};
    events: ButtonPrimitive.Events;
};
export type LightSwitchProps = typeof __propDef.props;
export type LightSwitchEvents = typeof __propDef.events;
export type LightSwitchSlots = typeof __propDef.slots;
export default class LightSwitch extends SvelteComponent<LightSwitchProps, LightSwitchEvents, LightSwitchSlots> {
}
export {};
