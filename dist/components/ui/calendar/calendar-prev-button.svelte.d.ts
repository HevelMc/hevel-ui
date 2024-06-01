import { SvelteComponent } from "svelte";
import { Calendar as CalendarPrimitive } from "bits-ui";
declare const __propDef: {
    props: CalendarPrimitive.PrevButtonProps;
    slots: {
        default: {
            builder: {
                role: string;
                type: "button";
                'aria-label': string;
                'aria-disabled': "true" | undefined;
                'data-disabled': string | undefined;
                disabled: boolean | undefined;
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
export type CalendarPrevButtonProps = typeof __propDef.props;
export type CalendarPrevButtonEvents = typeof __propDef.events;
export type CalendarPrevButtonSlots = typeof __propDef.slots;
export default class CalendarPrevButton extends SvelteComponent<CalendarPrevButtonProps, CalendarPrevButtonEvents, CalendarPrevButtonSlots> {
}
export {};
