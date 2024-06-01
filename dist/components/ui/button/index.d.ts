import { type VariantProps } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';
declare const buttonVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}, undefined, "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}, {
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}>, {
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}, undefined, "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}, {
    variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
        icon: string;
    };
}>, unknown, unknown, undefined>>;
type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];
type Props = ButtonPrimitive.Props & {
    variant?: Variant;
    size?: Size;
};
type Events = ButtonPrimitive.Events;
export { Root, type Props, type Events, Root as Button, type Props as ButtonProps, type Events as ButtonEvents, buttonVariants };
