import { DateTime } from "./luxon.js";

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate]
    };
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
};

export const datesToHTML = diff => 
    `
    <span>
        Лет: ${diff.years}, месяцев: ${diff.months}, дней: ${diff.days}.
    </span>
    `
