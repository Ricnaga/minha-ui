/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useThrottle } from "../";
import {
  testDefaultThrottle,
  testSearchInputThrottle,
} from "./useThrottle.play";

const meta: Meta = {
  title: "Hooks/useThrottle",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O hook **useThrottle** limita a frequência com que uma função pode ser executada, garantindo que ela seja chamada no máximo uma vez a cada intervalo especificado.

## Funcionalidades

- **Controle de frequência**: Executa a função apenas após um intervalo mínimo entre chamadas
- **Último argumento**: Se uma chamada for ignorada, os últimos argumentos são armazenados e a função é executada com eles quando o intervalo expirar
- **Preserva o contexto**: Mantém a referência original da função com \`useCallback\`
- **Cleanup automático**: Limpa timeouts pendentes ao desmontar

## Quando usar

- **Eventos de scroll**: Limitar a frequência de handlers de scroll
- **Resize de janela**: Controlar chamadas ao redimensionar
- **Input de busca**: Evitar múltiplas requisições durante digitação
- **Botões de submit**: Prevenir double-submit
- **Animações**: Controlar a frequência de updates de animação

## Diferença entre Throttle e Debounce

| Característica | Throttle | Debounce |
|----------------|----------|----------|
| Primeira execução | Imediata | Após intervalo |
| Execuções repetidas | A cada N ms | Apenas após pausa |
| Uso típico | Scroll, resize | Busca, autocomplete |

## Exemplo de uso

\`\`\`tsx
const throttledSearch = useThrottle((query: string) => {
  fetchResults(query);
}, 300);

// Input que chama a função no máximo uma vez a cada 300ms
<input onChange={(e) => throttledSearch(e.target.value)} />
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
    const [logs, setLogs] = useState<string[]>([]);
    const [count, setCount] = useState(0);

    const throttledLog = useThrottle((message: string) => {
      setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    }, 500);

    const handleClick = () => {
      setCount((c) => c + 1);
      throttledLog(`Clique #${count + 1} processado`);
    };

    return (
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">useThrottle - Exemplo Básico</h2>
        <p className="text-gray-600 max-w-md">
          Clique rapidamente no botão. A função será executada no máximo uma vez
          a cada 500ms. Mesmo com múltiplos cliques, apenas uma execução ocorre
          por intervalo.
        </p>

        <button
          onClick={handleClick}
          data-testid="throttle-button"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors w-fit"
        >
          Clique rápido! (Throttle: 500ms)
        </button>

        <div className="flex gap-4">
          <div className="p-4 bg-gray-100 rounded">
            <strong data-testid="click-count">
              Total de cliques: <span data-testid="click-count-value">{count}</span>
            </strong>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <strong data-testid="execution-count">
              Execuções: <span data-testid="execution-count-value">{logs.length}</span>
            </strong>
          </div>
        </div>

        <div className="max-h-40 overflow-y-auto border rounded p-3">
          <strong>Log de execuções:</strong>
          <ul className="mt-2 text-sm space-y-1">
            {logs.slice(-5).map((log, i) => (
              <li key={i} className="text-gray-600">
                {log}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
  play: testDefaultThrottle,
};

export const SearchInput: StoryObj = {
  name: "Input de busca com throttle",
  render: () => {
    const [query, setQuery] = useState("");
    const [searchLogs, setSearchLogs] = useState<string[]>([]);
    const [requestCount, setRequestCount] = useState(0);

    const throttledSearch = useThrottle((searchTerm: string) => {
      setSearchLogs((prev) => [
        ...prev,
        `${new Date().toLocaleTimeString()}: Buscando "${searchTerm}"...`,
      ]);
      setRequestCount((c) => c + 1);
    }, 1000);

    const handleInputChange = (value: string) => {
      setQuery(value);
      throttledSearch(value);
    };

    return (
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Busca com throttle</h2>
        <p className="text-gray-600 max-w-md">
          Digite rapidamente no campo. As requisições de busca são limitadas a
          uma por segundo, evitando sobrecarga no servidor.
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Digite para buscar..."
          data-testid="search-input"
          className="border p-3 rounded-lg w-80 text-lg"
        />

        <div className="flex gap-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <strong data-testid="request-count">
              Requisições: <span data-testid="request-count-value">{requestCount}</span>
            </strong>
          </div>
          <div className="p-3 bg-gray-100 rounded">
            <strong>Caracteres digitados:</strong> {query.length}
          </div>
        </div>

        <div className="border rounded p-3 max-h-48 overflow-y-auto">
          <strong>Log de requisições:</strong>
          <ul className="mt-2 text-sm space-y-1">
            {searchLogs.map((log, i) => (
              <li key={i} className="text-gray-600">
                {log}
              </li>
            ))}
            {searchLogs.length === 0 && (
              <li className="text-gray-400 italic">Nenhuma requisição ainda</li>
            )}
          </ul>
        </div>
      </div>
    );
  },
  play: testSearchInputThrottle,
};
