import { type VariantProps } from 'tailwind-variants';
export { default as Badge } from './badge.svelte';
export declare const badgeVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}, undefined, "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}>, {
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}, undefined, "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        destructive: string;
        outline: string;
    };
}>, unknown, unknown, undefined>>;
export type Variant = VariantProps<typeof badgeVariants>['variant'];
