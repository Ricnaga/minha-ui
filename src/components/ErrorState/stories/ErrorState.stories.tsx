/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { WarningIcon } from '@phosphor-icons/react';
import { Button } from '../../Button';
import { ErrorBoundary } from '../../ErrorBoundary';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorState } from '../ErrorState';
import type { ErrorStateProps } from '../error-state.types';
import {
  testAsErrorBoundaryFallback,
  testDefaultErrorState,
} from './ErrorState.play';

const meta: Meta<ErrorStateProps> = {
  title: 'Components/Feedback/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      description:
        'Conteúdo exibido acima do título. Se omitido, mostra o ícone padrão. Passe `null` para escondê-lo.',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<WarningCircleIcon />' },
        category: 'Content',
      },
    },
    title: {
      description: 'Título opcional do estado de erro.',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    message: {
      description:
        'Mensagem descritiva. Se omitida, mostra "Algo deu errado". Passe `null` para escondê-la.',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Algo deu errado' },
        category: 'Content',
      },
    },
    action: {
      description:
        'Área de ação opcional (ex.: um Button de tentar novamente).',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ErrorStateProps>;

export const Default: Story = {
  play: testDefaultErrorState,
};

export const WithTitle: Story = {
  args: {
    title: 'Não foi possível carregar os produtos',
    message: 'Verifique sua conexão e tente novamente.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Falha ao carregar',
    message: 'Ocorreu um erro ao buscar os dados.',
    action: (
      <Button color="error" onClick={() => {}}>
        Tentar novamente
      </Button>
    ),
  },
};

export const CustomImage: Story = {
  args: {
    image: <WarningIcon size={48} aria-hidden="true" />,
    title: 'Atenção',
    message: 'Alguns dados podem estar desatualizados.',
  },
};

export const HiddenImageAndMessage: Story = {
  args: {
    image: null,
    message: null,
    title: 'Erro inesperado',
  },
};

const FailingUntilRetry = ({ resetKey }: { resetKey: number }) => {
  if (resetKey === 0) {
    throw new Error('Falha ao carregar os dados');
  }

  return <p>Conteúdo carregado com sucesso</p>;
};

export const AsErrorBoundaryFallback: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Uso recomendado: `ErrorState` como `FallbackComponent` do `ErrorBoundary`. A ação dispara o `resetErrorBoundary` para tentar carregar novamente.',
      },
    },
  },
  render: () => {
    const [resetKey, setResetKey] = useState(0);

    return (
      <ErrorBoundary
        resetKeys={[resetKey]}
        FallbackComponent={({ error, resetErrorBoundary }: FallbackProps) => (
          <ErrorState
            message={String(error)}
            action={
              <Button
                color="error"
                onClick={() => {
                  setResetKey((current) => current + 1);
                  resetErrorBoundary();
                }}
              >
                Tentar novamente
              </Button>
            }
          />
        )}
      >
        <FailingUntilRetry resetKey={resetKey} />
      </ErrorBoundary>
    );
  },
  play: testAsErrorBoundaryFallback,
};
