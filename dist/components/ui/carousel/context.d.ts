/// <reference types="svelte" />
import type { EmblaCarouselSvelteType } from 'embla-carousel-svelte';
import type emblaCarouselSvelte from 'embla-carousel-svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Readable, Writable } from 'svelte/store';
export type CarouselAPI = NonNullable<NonNullable<EmblaCarouselSvelteType['$$_attributes']>['on:emblaInit']> extends (evt: CustomEvent<infer CarouselAPI>) => void ? CarouselAPI : never;
type EmblaCarouselConfig = NonNullable<Parameters<typeof emblaCarouselSvelte>[1]>;
export type CarouselOptions = EmblaCarouselConfig['options'];
export type CarouselPlugins = EmblaCarouselConfig['plugins'];
export type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugins;
    api?: CarouselAPI;
    orientation?: 'horizontal' | 'vertical';
} & HTMLAttributes<HTMLDivElement>;
type EmblaContext = {
    api: Writable<CarouselAPI | undefined>;
    orientation: Writable<'horizontal' | 'vertical'>;
    scrollNext: () => void;
    scrollPrev: () => void;
    canScrollNext: Readable<boolean>;
    canScrollPrev: Readable<boolean>;
    handleKeyDown: (e: KeyboardEvent) => void;
    options: Writable<CarouselOptions>;
    plugins: Writable<CarouselPlugins>;
    onInit: (e: CustomEvent<CarouselAPI>) => void;
    scrollTo: (index: number, jump?: boolean) => void;
    scrollSnaps: Readable<number[]>;
    selectedIndex: Readable<number>;
};
export declare function setEmblaContext(config: EmblaContext): EmblaContext;
export declare function getEmblaContext(name?: string): EmblaContext;
export {};
