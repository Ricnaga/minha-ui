import type { Meta, StoryObj } from '@storybook/react-vite';
import { promiseWrapper } from 'src/infra/fetchers/wrapper';

import { RenderBoundary } from '../RenderBoundary';
import type { RenderBoundaryProps } from '../render-boundary.types';
import {
  testLoading,
  testError,
  testWithChildren,
  testCustomLoadingFallback,
  testCustomErrorFallback,
  testWithSuspenseChildren,
} from './RenderBoundary.play';

const meta: Meta<RenderBoundaryProps> = {
  title: 'Components/Customizados/RenderBoundary',
  component: RenderBoundary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    loadingProps: { control: 'object' },
    errorProps: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<RenderBoundaryProps>;

const createDataPromise = () => (signal: AbortSignal) =>
  new Promise<string>((resolve) => {
    const timeout = setTimeout(() => resolve('Dados carregados!'), 2000);
    signal.addEventListener('abort', () => clearTimeout(timeout));
  });

const SlowComponent = () => {
  const data = promiseWrapper<string>(createDataPromise()).read();
  return <div>{data}</div>;
};

export const Default: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story:
          'Estado inicial sem children. O RenderBoundary precisa de children que fa\u00e7am uso de Suspense (promises pendentes) para demonstrar seu funcionamento. Use as outras stories para ver os diferentes estados.',
      },
    },
  },
};

export const Loading: Story = {
  name: 'Loading State',
  parameters: {
    docs: {
      description: {
        story:
          'Estado de loading usando Suspense. O componente fica em suspens\u00e3o at\u00e9 que o children termine de carregar.',
      },
    },
  },
  args: {
    loadingProps: {
      fallback: <div>carregando...</div>,
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <SlowComponent />
    </RenderBoundary>
  ),
  play: testLoading,
};

export const ErrorState: Story = {
  name: 'Error State',
  parameters: {
    docs: {
      description: {
        story:
          'Estado de erro capturado pelo ErrorBoundary. Exibe a mensagem padr\u00e3o de erro.',
      },
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <ErrorComponent shouldError />
    </RenderBoundary>
  ),
  play: testError,
};

export const WithChildren: Story = {
  name: 'With Children',
  parameters: {
    docs: {
      description: {
        story:
          'Renderiza children diretamente quando n\u00e3o h\u00e1 loading ou error.',
      },
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <div>
        <h2>Título</h2>
        <p>Este \u00e9 o conteúdo renderizado dentro do RenderBoundary.</p>
      </div>
    </RenderBoundary>
  ),
  play: testWithChildren,
};

export const CustomLoadingFallback: Story = {
  name: 'Custom Loading Fallback',
  parameters: {
    docs: {
      description: {
        story:
          'Estado de loading com fallback customizado via Suspense fallback.',
      },
    },
  },
  args: {
    loadingProps: {
      fallback: <div data-testid="custom-loading">Carregando dados...</div>,
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <SlowComponent />
    </RenderBoundary>
  ),
  play: testCustomLoadingFallback,
};

export const CustomErrorFallback: Story = {
  name: 'Custom Error Fallback',
  parameters: {
    docs: {
      description: {
        story: 'Estado de erro com fallbackRender customizado.',
      },
    },
  },
  args: {
    errorProps: {
      fallbackRender: ({ error, resetErrorBoundary }) => {
        const errorObj = error as Error;
        const errorMessage = errorObj?.message ?? String(error);
        return (
          <div data-testid="custom-error">
            <p>Algo deu errado!</p>
            <p>Erro: {errorMessage}</p>
            <button onClick={resetErrorBoundary}>Tentar novamente</button>
          </div>
        );
      },
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <ErrorComponent shouldError />
    </RenderBoundary>
  ),
  play: testCustomErrorFallback,
};

export const WithSuspenseChildren: Story = {
  name: 'With Suspense Children',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra o uso com componentes que usam React Suspense internamente.',
      },
    },
  },
  render: (args) => (
    <RenderBoundary {...args}>
      <SuspenseDemo />
    </RenderBoundary>
  ),
  play: testWithSuspenseChildren,
};

const ErrorComponent = ({ shouldError = false }: { shouldError?: boolean }) => {
  if (shouldError) {
    throw new Error('Erro simulado!');
  }
  return <div data-testid="success-content">Sucesso</div>;
};

function SuspenseDemo() {
  return (
    <div>
      <h3>Componente com Suspense interno</h3>
      <p>Este componente renderiza imediatamente sem pend\u00eancia.</p>
    </div>
  );
}
