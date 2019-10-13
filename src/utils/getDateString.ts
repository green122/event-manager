export function getDateTimeString(date: Date, time: string) {
  const dateLocale = date.toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long'
  });
  const dateTimeZone = date
    .toLocaleDateString('en-EN', {
      timeZoneName: 'short'
    })
    .split(' ')
    .slice(1);
  return `${dateLocale} ${time} ${dateTimeZone}`;
}

export function getDateString(date: Date) {
  return date.toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
}
