import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatISOToDateBR, formatToDate } from "..";

const meta: Meta = {
  title: "Utils/Date",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const FormatToDate: StoryObj = {
  render: () => {
    const examples = [
      { label: "Date nativo", value: new Date(2026, 0, 2) },
      { label: "String ISO", value: "2026-01-02" },
      { label: "String com outro formato ISO", value: "2000-12-25T00:00:00Z" },
      { label: "Data inválida", value: "invalid string" },
      { label: "Hoje", value: new Date() },
    ];

    return (
      <div className="p-10 flex flex-col gap-6 w-[500px]">
        <h2 className="text-lg font-bold">
          formatToDateBR – Datas da API para pt-BR
        </h2>

        <p className="text-sm text-neutral-700">
          Recebe Date nativo ou string e retorna a data no formato pt-BR (
          <code>dd/mm/aaaa</code>).
        </p>

        <div className="mt-4">
          <h3 className="font-semibold">Exemplos:</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
            {examples.map((ex) => (
              <li key={ex.label}>
                <strong>{ex.label}:</strong> {String(ex.value)} →{" "}
                <span className="text-green-600">{formatToDate(ex.value)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};
export const FormatISOToDateBR: StoryObj = {
  render: () => {
    const examples = [
      { label: "ISO básico", value: "2026-01-02" },
      { label: "ISO com hora UTC", value: "2026-01-02T00:00:00Z" },
      { label: "ISO com hora local", value: "2026-01-02T15:30:00" },
      { label: "Outra data", value: "2000-12-25" },
      { label: "Inválida", value: "invalid" },
    ];

    return (
      <div className="p-10 flex flex-col gap-6 w-[500px]">
        <h2 className="text-lg font-bold">
          formatISOToDateBR – ISO string para dd/mm/aaaa
        </h2>

        <p className="text-sm text-neutral-700">
          Recebe uma string ISO (ou yyyy-mm-dd) e retorna a data no formato
          pt-BR, corrigindo problemas de fuso horário.
        </p>

        <div className="mt-4">
          <h3 className="font-semibold">Exemplos:</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
            {examples.map((ex) => (
              <li key={ex.label}>
                <strong>{ex.label}:</strong> {ex.value} →{" "}
                <span className="text-green-600">
                  {formatISOToDateBR(ex.value) || "Inválido"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};
