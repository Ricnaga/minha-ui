export function formatToCPF(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatToCNPJ(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

/**
 * Formata string numérica para moeda sem cifrão
 * Últimos 2 dígitos sempre como centavos
 * Ex: "123456" -> "1.234,56"
 */
export function formatToMonetary(
  value: string,
  options?: { locale?: string }
): string {
  const locale = options?.locale || "pt-BR";

  // Remove tudo que não seja dígito
  const onlyDigits = value.replace(/\D/g, "");

  if (!onlyDigits) return "0,00";

  // Converte para número considerando os últimos 2 dígitos como centavos
  const number = parseFloat(onlyDigits) / 100;

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

/**
 * Formata string numérica para BRL (R$), mantendo os últimos 2 dígitos como centavos
 * Ex: "123456" -> "R$ 1.234,56"
 */
export function formatToBRL(
  value: string,
  options?: { locale?: string }
): string {
  const locale = options?.locale || "pt-BR";

  // Remove tudo que não seja dígito
  const onlyDigits = value.replace(/\D/g, "");

  if (!onlyDigits) return "R$ 0,00";

  // Converte para número considerando os últimos 2 dígitos como centavos
  const number = parseFloat(onlyDigits) / 100;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

export function extractDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export const capitalize = (str: string): string => {
  if (!str) return "";
  
  return str.charAt(0).toUpperCase() + str.slice(1);
};
