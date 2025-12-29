export const formatToDate = (
  value: Date,
  options?: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat("pt-br", { ...options }).format(value);
