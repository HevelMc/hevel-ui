export type Month = {
    year: number;
    month: number;
};
export declare function getMonthName(month: number, locale?: Intl.LocalesArgument): string;
export declare function getMonthYearName(month: Month, locale?: Intl.LocalesArgument): string;
export declare function isAllowed(month: Month, minValue: Month | undefined, maxValue: Month | undefined): boolean;
export declare function isInRange(value: Month, startMonth: Month, endMonth: Month): boolean;
export declare function isSameMonth(a: Month | undefined, b: Month | undefined): boolean;
export declare function includesMonth(months: Month[], month: Month): boolean;
export declare function sortMonths(months: Month[]): Month[];
