export const formatToDate = (value: Date | string): string => {
  let date: Date;

  if (typeof value === "string") {
    date = new Date(value);
    if (isNaN(date.getTime())) return ""; // data inválida
  } else if (value instanceof Date) {
    date = value;
  } else {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const formatISOToDateBR = (isoString: string): string => {
  if (!isoString) return "";

  // Extrai ano, mês, dia da string
  const match = isoString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return "";

  const [, year, month, day] = match.map(Number);

  // Cria Date no horário local, evitando problema de fuso horário
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("pt-BR");
};
