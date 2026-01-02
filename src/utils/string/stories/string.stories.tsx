/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  capitalize,
  extractDigits,
  formatToBRL,
  formatToCNPJ,
  formatToCPF,
  formatToMonetary,
} from "..";

const meta: Meta = {
  title: "Utils/String",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const FormatToCPF: StoryObj = {
  render: () => {
    const [cpf, setCpf] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setCpf(formatToCPF(e.target.value));
    }

    return (
      <div className="p-10 flex flex-col gap-4 w-[300px]">
        <p className="text-sm text-neutral-700">
          Digite o CPF. Ele será formatado automaticamente enquanto você digita:
          <br />
          <strong>Exemplo:</strong> 12345678901 → 123.456.789-01
        </p>

        <input
          value={cpf}
          onChange={handleChange}
          placeholder="Digite o CPF"
          className="border p-2 rounded"
          inputMode="numeric"
        />

        <p className="text-sm">
          <strong>Valor formatado:</strong>{" "}
          <span className="text-green-600">{cpf || "—"}</span>
        </p>
      </div>
    );
  },
};

export const FormatToCNPJ: StoryObj = {
  render: () => {
    const [cnpj, setCNPJ] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setCNPJ(formatToCNPJ(e.target.value));
    }

    return (
      <div className="p-10 flex flex-col gap-4 w-[300px]">
        <p className="text-sm text-neutral-700">
          Digite o CNPJ. Ele será formatado automaticamente enquanto você
          digita:
          <br />
          <strong>Exemplo:</strong> 1234567890123 → 12.345.678/9012-3
        </p>

        <input
          value={cnpj}
          onChange={handleChange}
          placeholder="Digite o CNPJ"
          className="border p-2 rounded"
          inputMode="numeric"
        />

        <p className="text-sm">
          <strong>Valor formatado:</strong>{" "}
          <span className="text-green-600">{cnpj || "—"}</span>
        </p>
      </div>
    );
  },
};

export const FormatToMonetary: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <div className="p-10 flex flex-col gap-4 w-[300px]">
        <p className="text-sm text-neutral-700">
          Digite um valor. Ele será formatado automaticamente para padrão
          monetário (milhares + 2 decimais) sem R$:
        </p>

        <input
          value={value}
          onChange={(e) => setValue(formatToMonetary(e.target.value))}
          placeholder="Digite um valor"
          className="border p-2 rounded"
          inputMode="numeric"
        />

        <p className="text-sm">
          <strong>Formatado:</strong>{" "}
          <span className="text-green-600">{value || "—"}</span>
        </p>
      </div>
    );
  },
};

export const FormatToBRL: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="p-10 flex flex-col gap-4 w-[300px]">
        <p className="text-sm text-neutral-700">
          Digite um valor. Ele será formatado automaticamente para BRL (com R$):
        </p>

        <input
          value={value}
          onChange={(e) => setValue(formatToBRL(e.target.value))}
          placeholder="Digite um valor"
          className="border p-2 rounded"
          inputMode="numeric"
        />

        <p className="text-sm">
          <strong>Formatado:</strong>{" "}
          <span className="text-green-600">{value || "—"}</span>
        </p>
      </div>
    );
  },
};

export const ExtractDigits: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");

    const examples = [
      { label: "CPF", input: "123.456.789-01" },
      { label: "CNPJ", input: "12.345.678/0001-90" },
      { label: "Monetary", input: "1.234,56" },
      { label: "BRL", input: "R$ 1.234,56" },
      { label: "Texto com números", input: "Telefone: (11) 91234-5678" },
    ];

    return (
      <div className="p-10 flex flex-col gap-6 w-[400px]">
        <h2 className="text-lg font-bold">
          extractDigits – extrai apenas os dígitos de uma string
        </h2>

        <p className="text-sm text-neutral-700">
          Digite qualquer valor formatado, ele será convertido para apenas
          números.
        </p>

        <input
          placeholder="Digite algo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded"
        />

        <p className="text-sm">
          <strong>Convertido:</strong>{" "}
          <span className="text-green-600">{extractDigits(value) || "—"}</span>
        </p>

        <div className="mt-6">
          <h3 className="font-semibold">Exemplos:</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
            {examples.map((ex) => (
              <li key={ex.label}>
                <strong>{ex.label}:</strong> {ex.input} →{" "}
                <span className="text-green-600">
                  {extractDigits(ex.input)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};

export const Capitalize: StoryObj = {
  render: () => {
    const examples = [
      { label: "Todas minúsculas", value: "hello world" },
      { label: "Primeira maiúscula já", value: "JavaScript" },
      { label: "Uma letra", value: "a" },
      { label: "Vazio", value: "" },
      { label: "Com número", value: "1teste" },
    ];

    return (
      <div className="p-10 flex flex-col gap-4 w-[400px]">
        <h2 className="text-lg font-bold">capitalizeFirst – Capitaliza primeira letra</h2>

        <ul className="list-disc ml-5 mt-2 text-sm text-neutral-700 space-y-1">
          {examples.map((ex) => (
            <li key={ex.label}>
              <strong>{ex.label}:</strong> "{ex.value}" →{" "}
              <span className="text-green-600">"{capitalize(ex.value)}"</span>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};
