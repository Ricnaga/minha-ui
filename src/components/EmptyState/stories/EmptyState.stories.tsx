import type { Meta, StoryObj } from '@storybook/react-vite';

import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button } from '../../Button';
import { EmptyState } from '../EmptyState';
import type { EmptyStateProps } from '../empty-state.types';
import { testDefaultEmptyState } from './EmptyState.play';

const meta: Meta<EmptyStateProps> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
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
        defaultValue: { summary: '<TrayIcon />' },
        category: 'Content',
      },
    },
    title: {
      description: 'Título opcional do estado vazio.',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    message: {
      description:
        'Mensagem descritiva. Se omitida, mostra "Nenhum resultado encontrado". Passe `null` para escondê-la.',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Nenhum resultado encontrado' },
        category: 'Content',
      },
    },
    action: {
      description: 'Área de ação opcional (ex.: um Button).',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
  },
};

export default meta;
type Story = StoryObj<EmptyStateProps>;

export const Default: Story = {
  play: testDefaultEmptyState,
};

export const WithTitle: Story = {
  args: {
    title: 'Nenhum produto cadastrado',
    message: 'Cadastre um produto para começar a vender.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Sua sacola está vazia',
    message: 'Explore nossos produtos e adicione itens à sacola.',
    action: <Button color="primary">Explorar produtos</Button>,
  },
};

export const CustomImage: Story = {
  args: {
    image: <MagnifyingGlassIcon size={48} aria-hidden="true" />,
    title: 'Nenhum resultado',
    message: 'Tente ajustar os filtros da busca.',
  },
};

export const HiddenImageAndMessage: Story = {
  args: {
    image: null,
    message: null,
    title: 'Sem dados para exibir',
  },
};
