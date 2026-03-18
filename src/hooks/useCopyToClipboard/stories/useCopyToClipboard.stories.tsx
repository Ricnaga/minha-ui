/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useCopyToClipboard } from "../";
import {
  testDefaultCopyToClipboard,
  testCopyCodeSnippet,
  testMultipleCopyButtons,
} from "./useCopyToClipboard.play";

const meta: Meta = {
  title: "Hooks/useCopyToClipboard",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O hook **useCopyToClipboard** permite copiar texto para a área de transferência do sistema com suporte a feedback de estado.

## Funcionalidades

- **Copia texto para a área de transferência** usando a API nativa navigator.clipboard
- **Retorna estados**: \`isCopied\`, \`copiedValue\`, \`error\` e \`reset\`
- **Feedback visual**: Permite mostrar ao usuário se a cópia foi bem-sucedida
- **Fallback para erros**: Captura e retorna erros quando a API não está disponível

## Quando usar

- Botões de "Copiar link"
- Funcionalidade de "Copiar código"
- Botões de "Compartilhar" que copiam texto
- Qualquer interface que precise copiar conteúdo para o clipboard

## Exemplo de uso

\`\`\`tsx
const { copyToClipboard, isCopied } = useCopyToClipboard();

<button onClick={() => copyToClipboard("Hello World")}>
  {isCopied ? "Copiado!" : "Copiar"}
</button>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { copyToClipboard, isCopied, copiedValue, reset } =
      useCopyToClipboard();
    const [customText, setCustomText] = useState("Texto para copiar");

    return (
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">useCopyToClipboard</h2>
        <p className="text-gray-600 max-w-md">
          Clique no botão para copiar o texto. O estado \`isCopied\` muda para
          \`true\` quando a cópia é bem-sucedida.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              data-testid="text-input"
              className="border p-2 rounded flex-1"
              placeholder="Digite o texto para copiar..."
            />
            <button
              onClick={() => copyToClipboard(customText)}
              data-testid="copy-button"
              className={`px-4 py-2 rounded font-medium transition-colors ${
                isCopied
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isCopied ? "Copiado!" : "Copiar"}
            </button>
          </div>

          {copiedValue && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-sm" data-testid="copied-value-display">
              <strong>Texto copiado:</strong> <code>{copiedValue}</code>
            </div>
          )}

          {isCopied && (
            <button
              onClick={reset}
              data-testid="reset-button"
              className="text-sm text-gray-500 hover:text-gray-700 underline self-start"
            >
              Resetar estado
            </button>
          )}
        </div>
      </div>
    );
  },
  play: testDefaultCopyToClipboard,
};

export const CopyCodeSnippet: StoryObj = {
  name: "Copiar trecho de código",
  render: () => {
    const { copyToClipboard, isCopied } = useCopyToClipboard();
    const codeSnippet = `const greet = (name) => {
  return \`Hello, \${name}!\`;
};`;

    return (
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Copiar código</h2>
        <p className="text-gray-600 max-w-md">
          Exemplo de uso comum: copiar trechos de código para compartilhar.
        </p>

        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code data-testid="code-snippet">{codeSnippet}</code>
          </pre>
          <button
            onClick={() => copyToClipboard(codeSnippet)}
            data-testid="copy-code-button"
            className={`absolute top-2 right-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
              isCopied
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {isCopied ? "Copiado!" : "Copiar código"}
          </button>
        </div>
      </div>
    );
  },
  play: testCopyCodeSnippet,
};

export const MultipleCopyButtons: StoryObj = {
  name: "Múltiplos botões de copiar",
  render: () => {
    const items = [
      { label: "E-mail", value: "usuario@exemplo.com" },
      { label: "Telefone", value: "+55 (11) 99999-9999" },
      { label: "GitHub", value: "github.com/usuario" },
    ];

    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const { copyToClipboard } = useCopyToClipboard();

    const handleCopy = async (index: number, text: string) => {
      const success = await copyToClipboard(text);
      if (success) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
    };

    return (
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Múltiplos botões</h2>
        <p className="text-gray-600 max-w-md">
          Cada botão mantém seu próprio estado de \`isCopied\` quando gerenciado
          externamente.
        </p>

        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-3 border rounded"
            >
              <span className="font-medium w-20">{item.label}:</span>
              <code className="flex-1 text-gray-600">{item.value}</code>
              <button
                onClick={() => handleCopy(index, item.value)}
                data-testid={`copy-item-button-${index}`}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  copiedIndex === index
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {copiedIndex === index ? "Copiado!" : "Copiar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  },
  play: testMultipleCopyButtons,
};
