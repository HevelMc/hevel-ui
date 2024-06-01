import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import type { HeadingLevel } from './index.js';
declare const __propDef: {
    props: HTMLAttributes<HTMLHeadingElement> & {
        tag?: HeadingLevel | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CardTitleProps = typeof __propDef.props;
export type CardTitleEvents = typeof __propDef.events;
export type CardTitleSlots = typeof __propDef.slots;
export default class CardTitle extends SvelteComponent<CardTitleProps, CardTitleEvents, CardTitleSlots> {
}
export {};
