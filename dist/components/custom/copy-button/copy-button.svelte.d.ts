import { SvelteComponent } from "svelte";
import { Button as ButtonPrimitive } from 'bits-ui';
import { type Props } from '../../ui/button/index.js';
declare const __propDef: {
    props: Props & {
        value: string;
        tooltipCopy: string;
        tooltipCopied: string;
    };
    slots: {};
    events: ButtonPrimitive.Events;
};
export type CopyButtonProps = typeof __propDef.props;
export type CopyButtonEvents = typeof __propDef.events;
export type CopyButtonSlots = typeof __propDef.slots;
export default class CopyButton extends SvelteComponent<CopyButtonProps, CopyButtonEvents, CopyButtonSlots> {
}
export {};
