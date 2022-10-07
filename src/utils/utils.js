/** */
export const getFormattedDate = (date, locale = 'de') =>
  date
    ? new Date(date).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
