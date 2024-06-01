import { SvelteComponent } from "svelte";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: RangeCalendarPrimitive.NextButtonProps;
    slots: {
        default: {
            builder: {
                role: string;
                type: "button";
                'aria-label': string;
                'aria-disabled': "true" | undefined;
                disabled: boolean | undefined;
                'data-disabled': string | undefined;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
            };
        };
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
    };
};
export type RangeCalendarNextButtonProps = typeof __propDef.props;
export type RangeCalendarNextButtonEvents = typeof __propDef.events;
export type RangeCalendarNextButtonSlots = typeof __propDef.slots;
export default class RangeCalendarNextButton extends SvelteComponent<RangeCalendarNextButtonProps, RangeCalendarNextButtonEvents, RangeCalendarNextButtonSlots> {
}
export {};
