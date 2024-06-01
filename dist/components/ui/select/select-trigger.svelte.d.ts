import { SvelteComponent } from "svelte";
import { Select as SelectPrimitive } from 'bits-ui';
declare const __propDef: {
    props: SelectPrimitive.TriggerProps;
    slots: {
        default: {
            builder: {
                readonly 'aria-activedescendant': string | undefined;
                readonly 'aria-autocomplete': "list";
                readonly 'aria-controls': string;
                readonly 'aria-expanded': boolean;
                readonly 'aria-labelledby': string;
                readonly id: string;
                readonly role: "combobox";
                readonly disabled: true | undefined;
                readonly type: "button" | undefined;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<"click" | "keydown" | "input">;
            };
        };
    };
    events: SelectPrimitive.TriggerEvents;
};
export type SelectTriggerProps = typeof __propDef.props;
export type SelectTriggerEvents = typeof __propDef.events;
export type SelectTriggerSlots = typeof __propDef.slots;
export default class SelectTrigger extends SvelteComponent<SelectTriggerProps, SelectTriggerEvents, SelectTriggerSlots> {
}
export {};
