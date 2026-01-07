interface FormatToPercentageOptions {
  value: number;
  locale?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatToPercentage({
  value,
  locale = "pt-BR",
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
}: FormatToPercentageOptions): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
}
