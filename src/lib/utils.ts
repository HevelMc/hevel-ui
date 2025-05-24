import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { DateRange } from 'bits-ui';
import { today, parseDate, type DateValue } from '@internationalized/date';

export { type DateRange, type DateValue, today, parseDate };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

// Wrappers around svelte's `HTMLAttributes` types to add a `ref` prop can be bound to
// to get a reference to the underlying DOM element the component is rendering.
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
  HTMLImgAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLLiAttributes,
  HTMLOlAttributes,
  HTMLTableAttributes,
  HTMLTdAttributes,
  HTMLTextareaAttributes,
  HTMLThAttributes
} from 'svelte/elements';
export type PrimitiveDivAttributes = WithElementRef<HTMLAttributes<HTMLDivElement>>;
export type PrimitiveElementAttributes = WithElementRef<HTMLAttributes<HTMLElement>>;
export type PrimitiveAnchorAttributes = WithElementRef<HTMLAnchorAttributes>;
export type PrimitiveButtonAttributes = WithElementRef<HTMLButtonAttributes>;
export type PrimitiveInputAttributes = WithElementRef<HTMLInputAttributes>;
export type PrimitiveSpanAttributes = WithElementRef<HTMLAttributes<HTMLSpanElement>>;
export type PrimitiveTextareaAttributes = WithElementRef<HTMLTextareaAttributes>;
export type PrimitiveHeadingAttributes = WithElementRef<HTMLAttributes<HTMLHeadingElement>>;
export type PrimitiveLiAttributes = WithElementRef<HTMLLiAttributes>;
export type PrimitiveOlAttributes = WithElementRef<HTMLOlAttributes>;
export type PrimitiveLabelAttributes = WithElementRef<HTMLLabelAttributes>;
export type PrimitiveUlAttributes = WithElementRef<HTMLAttributes<HTMLUListElement>>;
export type PrimitiveTableAttributes = WithElementRef<HTMLTableAttributes>;
export type PrimitiveTdAttributes = WithElementRef<HTMLTdAttributes>;
export type PrimitiveTrAttributes = WithElementRef<HTMLAttributes<HTMLTableRowElement>>;
export type PrimitiveThAttributes = WithElementRef<HTMLThAttributes>;
export type PrimitiveTableSectionAttributes = WithElementRef<HTMLAttributes<HTMLTableSectionElement>>;
export type PrimitiveImgAttributes = WithElementRef<HTMLImgAttributes>;
