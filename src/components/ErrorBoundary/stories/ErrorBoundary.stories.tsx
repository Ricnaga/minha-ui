/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Suspense, useState } from "react";

import { ErrorBoundary } from "../ErrorBoundary";
import type { ErrorBoundaryProps } from "../error-boundary.types";
import type { FallbackProps } from "react-error-boundary";
import {
  testDefaultErrorBoundary,
  testWithFallback,
  testWithFallbackRender,
  testWithFallbackComponent,
  testResetErrorBoundary,
  testNestedErrorBoundary,
} from "./ErrorBoundary.play";

const fetcherPromiseWrapper = <T,>(
  factory: (signal: AbortSignal) => Promise<T>,
) => {
  const controller = new AbortController();

  let status: "PENDING" | "SUCCESS" | "ERROR" = "PENDING";
  let result: T | Error;

  const suspender = factory(controller.signal).then(
    (value) => {
      status = "SUCCESS";
      result = value;
    },
    (error) => {
      status = "ERROR";
      result = error instanceof Error ? error : new Error(String(error));
    },
  );

  return {
    read() {
      switch (status) {
        case "PENDING":
          throw suspender;
        case "SUCCESS":
          return result as T;
        case "ERROR":
          throw result;
      }
    },
    abort() {
      controller.abort();
    },
  };
};

const fetcher = async <T extends unknown | string = string>(
  endpoint: string,
  baseURL?: string,
): Promise<T> => {
  const FETCHER_URL = new URL(endpoint, baseURL);

  const response = await fetch(FETCHER_URL.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! status:".concat(response.status.toString()));
      }
      return response.json();
    });

  return response;
};

const createFetcherResource = <T,>(endpoint: string, baseURL?: string) => {
  return fetcherPromiseWrapper<T>(() => fetcher<T>(endpoint, baseURL));
};

const meta: Meta<ErrorBoundaryProps> = {
  title: "Components/Interação/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente wrapper que captura erros em componentes filhos usando react-error-boundary. Suporta múltiplas formas de renderizar fallbacks e callbacks para tratamento de erros.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    fallback: { control: false },
    fallbackRender: { control: false },
    FallbackComponent: { control: false },
    onError: { control: false },
    onReset: { control: false },
    resetKeys: { control: false },
  },
  args: {
    onError: fn(),
    onReset: fn(),
  },
};

export default meta;
type Story = StoryObj<ErrorBoundaryProps>;

const ChildComponent = ({ shouldError = false }: { shouldError?: boolean }) => {
  if (shouldError) {
    throw new Error("Erro simulado!");
  }
  return <div data-testid="success-content">Conteúdo renderizado com sucesso</div>;
};

const ResettableChild = ({ resetKey }: { resetKey: string }) => {
  const shouldError = resetKey === "0";

  if (shouldError) {
    throw new Error("Erro inicial!");
  }

  return <div data-testid="success-content">Conteúdo após reset</div>;
};

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div data-testid="error-fallback" className="p-5 border border-red-500 rounded-lg">
    <h3 className="text-red-600 mb-2">Algo deu errado!</h3>
    <p className="text-gray-600 mb-2">{String(error)}</p>
    <button onClick={resetErrorBoundary} data-testid="reset-button" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      Tentar novamente
    </button>
  </div>
);

export const Default: Story = {
  name: "Default (Sem Erro)",
  parameters: {
    docs: {
      description: {
        story: "Componente funcionando normalmente quando não há erros nos filhos.",
      },
    },
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args}>
      <ChildComponent />
    </ErrorBoundary>
  ),
  play: testDefaultErrorBoundary,
};

export const WithFallback: Story = {
  name: "Com Fallback (ReactNode)",
  parameters: {
    docs: {
      description: {
        story: "Exibe um fallback customizado quando ocorre um erro. O fallback é um ReactNode estático.",
      },
    },
  },
  args: {
    fallback: <FallbackComponent error={new Error("Erro simulado")} resetErrorBoundary={() => {}} />,
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args}>
      <ChildComponent shouldError />
    </ErrorBoundary>
  ),
  play: testWithFallback,
};

export const WithFallbackRender: Story = {
  name: "Com FallbackRender (Função)",
  parameters: {
    docs: {
      description: {
        story: "Usa `fallbackRender` para renderizar o fallback via função. Recebe `error`, `resetErrorBoundary`.",
      },
    },
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <div data-testid="fallback-render" className="p-5 bg-red-100 rounded-lg">
          <p data-testid="error-message">{String(error)}</p>
          <button onClick={resetErrorBoundary} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Recarregar</button>
        </div>
      )}
      onError={args.onError}
    >
      <ChildComponent shouldError />
    </ErrorBoundary>
  ),
  play: testWithFallbackRender,
};

export const WithFallbackComponent: Story = {
  name: "Com FallbackComponent",
  parameters: {
    docs: {
      description: {
        story: "Usa `FallbackComponent` para um componente React dedicado ao fallback.",
      },
    },
  },
  args: {
    FallbackComponent: FallbackComponent,
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary {...args}>
      <ChildComponent shouldError />
    </ErrorBoundary>
  ),
  play: testWithFallbackComponent,
};

export const WithOnError: Story = {
  name: "Com OnError (Callback)",
  parameters: {
    docs: {
      description: {
        story: "Callback chamado quando um erro ocorre. Recebe o erro e info do React. Útil para logging.",
      },
    },
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <div data-testid="error-content" className="p-5">
          <p>Erro: {String(error)}</p>
          <button onClick={resetErrorBoundary} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
        </div>
      )}
      onError={(error, errorInfo) => {
        console.log("Erro capturado:", error);
        console.log("Info:", errorInfo);
        args.onError?.(error, errorInfo);
      }}
    >
      <ChildComponent shouldError />
    </ErrorBoundary>
  ),
};

export const WithOnReset: Story = {
  name: "Com OnReset (Callback)",
  parameters: {
    docs: {
      description: {
        story: "Callback chamado quando `resetErrorBoundary` é invocado. Recebe detalhes do reset.",
      },
    },
  },
  render: (args: ErrorBoundaryProps) => {
    const [resetKey, setResetKey] = useState(0);

    return (
      <ErrorBoundary
        resetKeys={[resetKey]}
        fallbackRender={({ resetErrorBoundary }: FallbackProps) => (
          <div data-testid="reset-trigger" className="p-5">
            <button onClick={() => {
              setResetKey(prev => prev + 1);
              resetErrorBoundary();
            }} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
          </div>
        )}
        onReset={(details) => {
          console.log("Reset realizado:", details);
          args.onReset?.(details);
        }}
      >
        <ResettableChild resetKey={String(resetKey)} />
      </ErrorBoundary>
    );
  },
  play: testResetErrorBoundary,
};

const ResetKeysChild = ({ resetKey }: { resetKey: string }) => (
  <div data-testid="reset-keys-content">
    <p>Reset Key atual: {resetKey}</p>
    <ChildComponent />
  </div>
);

export const WithResetKeys: Story = {
  name: "Com ResetKeys",
  parameters: {
    docs: {
      description: {
        story: "Quando `resetKeys` muda, o ErrorBoundary tenta renderizar novamente. Útil para re-fetch de dados.",
      },
    },
  },
  render: () => {
    const [resetKey, setResetKey] = useState("key-1");
    return (
      <ErrorBoundary
        resetKeys={[resetKey]}
        fallbackRender={() => (
          <div className="p-5">
            <p>Erro! Clique para mudar a key e tentar novamente.</p>
            <button onClick={() => setResetKey(`key-${Date.now()}`)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Mudar Key</button>
          </div>
        )}
      >
        <ResetKeysChild resetKey={resetKey} />
      </ErrorBoundary>
    );
  },
};

const SuspenseFallback = () => <div data-testid="loading">Carregando...</div>;

const FailingResourceComponent = ({ resource }: { resource: ReturnType<typeof fetcherPromiseWrapper> }) => {
  const data = resource.read();
  return <div data-testid="resource-data">{JSON.stringify(data)}</div>;
};

export const ComFetcherError: Story = {
  name: "Com Fetcher (Erro de API)",
  parameters: {
    docs: {
      description: {
        story: "Demonstra integração com o wrapper de fetcher. Quando a API falha, o erro é capturado pelo ErrorBoundary.",
      },
    },
  },
  render: () => {
    const failingResource = createFetcherResource<never>(
      "https://api.invalida.example.com/erro",
    );

    return (
      <ErrorBoundary
        fallbackRender={({ error }: FallbackProps) => (
          <div data-testid="fetcher-error" className="p-5 bg-red-200">
            <p>Erro na API: {String(error)}</p>
          </div>
        )}
      >
        <Suspense fallback={<SuspenseFallback />}>
          <FailingResourceComponent resource={failingResource} />
        </Suspense>
      </ErrorBoundary>
    );
  },
};

const SuccessResourceComponent = ({ resource }: { resource: ReturnType<typeof fetcherPromiseWrapper> }) => {
  const data = resource.read();
  return <div data-testid="success-data">{JSON.stringify(data)}</div>;
};

export const ComFetcherSuccess: Story = {
  name: "Com Fetcher (Sucesso)",
  parameters: {
    docs: {
      description: {
        story: "Demonstra fetcher retornando dados com sucesso. O ErrorBoundary envolve o componente em Suspense.",
      },
    },
  },
  render: () => {
    const successResource = createFetcherResource<{ name: string; age: number }>(
      "/users/1",
      "https://jsonplaceholder.typicode.com",
    );

    return (
      <ErrorBoundary
        fallbackRender={({ error }: FallbackProps) => (
          <div data-testid="fetcher-error" className="p-5 bg-red-200">
            <p>Erro na API: {String(error)}</p>
          </div>
        )}
      >
        <Suspense fallback={<SuspenseFallback />}>
          <SuccessResourceComponent resource={successResource} />
        </Suspense>
      </ErrorBoundary>
    );
  },
};

export const NestedErrorBoundary: Story = {
  name: "ErrorBoundary Aninhado",
  parameters: {
    docs: {
      description: {
        story: "Cada ErrorBoundary captura apenas erros de seus filhos. Erros em componentes internos não disparam o externo.",
      },
    },
  },
  render: (args: ErrorBoundaryProps) => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <div data-testid="outer-error" className="p-5 bg-red-200">
          <p>Erro no componente externo: {String(error)}</p>
          <button onClick={resetErrorBoundary} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Reset Externo</button>
        </div>
      )}
      onError={args.onError}
    >
      <div className="p-5 bg-gray-200">
        <p>Componente Externo</p>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
            <div data-testid="inner-error" className="p-5 bg-green-200">
              <p>Erro interno capturado: {String(error)}</p>
              <button onClick={resetErrorBoundary} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Reset Interno</button>
            </div>
          )}
        >
          <ChildComponent shouldError />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  ),
  play: testNestedErrorBoundary,
};
