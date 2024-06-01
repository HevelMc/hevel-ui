import { SvelteComponent } from "svelte";
import type { VariantProps } from 'tailwind-variants';
declare class __sveltets_Render<T extends 'single' | 'multiple'> {
    props(): {
        disabled?: boolean | undefined;
        type?: T | undefined;
        orientation?: import("@melt-ui/svelte/internal/types").Orientation | undefined;
        loop?: boolean | undefined;
        rovingFocus?: boolean | undefined;
        value?: (T extends "single" ? string : string[]) | undefined;
        onValueChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<(T extends "single" ? string : string[]) | undefined> | undefined;
        asChild?: boolean | undefined;
        el?: HTMLDivElement | undefined;
    } & import("bits-ui/dist/internal/types.js").HTMLDivAttributes & VariantProps<import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }, undefined, "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", import("tailwind-variants/dist/config.js").TVConfig<{
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }, {
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }>, {
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }, undefined, "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", import("tailwind-variants/dist/config.js").TVConfig<{
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }, {
        variant: {
            default: string;
            outline: string;
        };
        size: {
            default: string;
            sm: string;
            lg: string;
        };
    }>, unknown, unknown, undefined>>>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            builder: {
                readonly role: "group";
                readonly 'data-orientation': import("@melt-ui/svelte/internal/types").Orientation;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: import("svelte/action").Action<any, any, Record<never, any>>;
            };
        };
    };
}
export type ToggleGroupProps<T extends 'single' | 'multiple'> = ReturnType<__sveltets_Render<T>['props']>;
export type ToggleGroupEvents<T extends 'single' | 'multiple'> = ReturnType<__sveltets_Render<T>['events']>;
export type ToggleGroupSlots<T extends 'single' | 'multiple'> = ReturnType<__sveltets_Render<T>['slots']>;
export default class ToggleGroup<T extends 'single' | 'multiple'> extends SvelteComponent<ToggleGroupProps<T>, ToggleGroupEvents<T>, ToggleGroupSlots<T>> {
}
export {};
