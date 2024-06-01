export type Month = {
  year: number;
  month: number;
};

export function getMonthName(month: number, locale?: Intl.LocalesArgument): string {
  return new Date(0, month).toLocaleString(locale, { month: 'long' }).capitalize();
}

export function getMonthYearName(month: Month, locale?: Intl.LocalesArgument): string {
  return `${getMonthName(month.month, locale)} ${month.year}`;
}

export function isAllowed(month: Month, minValue: Month | undefined, maxValue: Month | undefined) {
  if (minValue && minValue.year == month.year && minValue.month > month.month) return false;
  if (maxValue && maxValue.year == month.year && maxValue.month < month.month) return false;
  if (minValue && minValue.year > month.year) return false;
  if (maxValue && maxValue.year < month.year) return false;
  return true;
}

export function isInRange(value: Month, startMonth: Month, endMonth: Month) {
  if (value.year < startMonth.year || value.year > endMonth.year) return false;
  if (value.year == startMonth.year && value.month < startMonth.month) return false;
  if (value.year == endMonth.year && value.month > endMonth.month) return false;
  return true;
}

export function isSameMonth(a: Month | undefined, b: Month | undefined) {
  return a?.year == b?.year && a?.month == b?.month;
}

export function includesMonth(months: Month[], month: Month) {
  return months.some((m) => isSameMonth(m, month));
}

export function sortMonths(months: Month[]) {
  return months.sort((a, b) => a.year - b.year || a.month - b.month);
}
