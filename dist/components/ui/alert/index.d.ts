import { type VariantProps } from 'tailwind-variants';
import Root from './alert.svelte';
import Description from './alert-description.svelte';
import Title from './alert-title.svelte';
export declare const alertVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        destructive: string;
    };
}, undefined, "relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        destructive: string;
    };
}, {
    variant: {
        default: string;
        destructive: string;
    };
}>, {
    variant: {
        default: string;
        destructive: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        destructive: string;
    };
}, undefined, "relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        destructive: string;
    };
}, {
    variant: {
        default: string;
        destructive: string;
    };
}>, unknown, unknown, undefined>>;
export type Variant = VariantProps<typeof alertVariants>['variant'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export { Root, Description, Title, Root as Alert, Description as AlertDescription, Title as AlertTitle };
