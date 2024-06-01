import { Dialog as SheetPrimitive } from 'bits-ui';
import { type VariantProps } from 'tailwind-variants';
import Portal from './sheet-portal.svelte';
import Overlay from './sheet-overlay.svelte';
import Content from './sheet-content.svelte';
import Header from './sheet-header.svelte';
import Footer from './sheet-footer.svelte';
import Title from './sheet-title.svelte';
import Description from './sheet-description.svelte';
declare const Root: typeof SheetPrimitive.Root;
declare const Close: typeof SheetPrimitive.Close;
declare const Trigger: typeof SheetPrimitive.Trigger;
export { Root, Close, Trigger, Portal, Overlay, Content, Header, Footer, Title, Description, Root as Sheet, Close as SheetClose, Trigger as SheetTrigger, Portal as SheetPortal, Overlay as SheetOverlay, Content as SheetContent, Header as SheetHeader, Footer as SheetFooter, Title as SheetTitle, Description as SheetDescription };
export declare const sheetVariants: import("tailwind-variants").TVReturnType<{
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}, undefined, "fixed z-50 gap-4 bg-background p-6 shadow-lg", import("tailwind-variants/dist/config").TVConfig<{
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}, {
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}>, {
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}, undefined, "fixed z-50 gap-4 bg-background p-6 shadow-lg", import("tailwind-variants/dist/config").TVConfig<{
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}, {
    side: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
}>, unknown, unknown, undefined>>;
export declare const sheetTransitions: {
    top: {
        in: {
            y: string;
            duration: number;
            opacity: number;
        };
        out: {
            y: string;
            duration: number;
            opacity: number;
        };
    };
    bottom: {
        in: {
            y: string;
            duration: number;
            opacity: number;
        };
        out: {
            y: string;
            duration: number;
            opacity: number;
        };
    };
    left: {
        in: {
            x: string;
            duration: number;
            opacity: number;
        };
        out: {
            x: string;
            duration: number;
            opacity: number;
        };
    };
    right: {
        in: {
            x: string;
            duration: number;
            opacity: number;
        };
        out: {
            x: string;
            duration: number;
            opacity: number;
        };
    };
};
export type Side = VariantProps<typeof sheetVariants>['side'];
