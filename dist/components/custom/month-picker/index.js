export function getMonthName(month, locale) {
    return new Date(0, month).toLocaleString(locale, { month: 'long' }).capitalize();
}
export function getMonthYearName(month, locale) {
    return `${getMonthName(month.month, locale)} ${month.year}`;
}
export function isAllowed(month, minValue, maxValue) {
    if (minValue && minValue.year == month.year && minValue.month > month.month)
        return false;
    if (maxValue && maxValue.year == month.year && maxValue.month < month.month)
        return false;
    if (minValue && minValue.year > month.year)
        return false;
    if (maxValue && maxValue.year < month.year)
        return false;
    return true;
}
export function isInRange(value, startMonth, endMonth) {
    if (value.year < startMonth.year || value.year > endMonth.year)
        return false;
    if (value.year == startMonth.year && value.month < startMonth.month)
        return false;
    if (value.year == endMonth.year && value.month > endMonth.month)
        return false;
    return true;
}
export function isSameMonth(a, b) {
    return a?.year == b?.year && a?.month == b?.month;
}
export function includesMonth(months, month) {
    return months.some((m) => isSameMonth(m, month));
}
export function sortMonths(months) {
    return months.sort((a, b) => a.year - b.year || a.month - b.month);
}
