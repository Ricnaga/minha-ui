import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import type { SelectOptions } from '@/components';
import { AutoComplete } from '../AutoComplete';
import type { AutoCompleteProps } from '../auto-complete.types';
import {
  testDefaultAutoComplete,
  testMultipleAutoComplete,
  testSelectByClick,
} from './AutoComplete.play';

const FRUITS: SelectOptions[] = [
  { key: '1', value: 'Banana' },
  { key: '2', value: 'Maçã' },
  { key: '3', value: 'Laranja' },
  { key: '4', value: 'Uva' },
  { key: '5', value: 'Morango' },
  { key: '6', value: 'Abacaxi' },
];

const meta: Meta<AutoCompleteProps> = {
  title: 'Components/Formularios/AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Lista de opções disponíveis',
      control: false,
      table: { type: { summary: 'SelectOptions[]' } },
    },
    value: {
      description: 'Valor controlado do campo de busca',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'Valor inicial no modo não-controlado',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onInputChange: {
      description: 'Disparado a cada digitação',
      action: 'input changed',
      table: { type: { summary: '(value: string) => void' } },
    },
    onSelect: {
      description: 'Disparado quando uma opção é escolhida',
      action: 'option selected',
      table: { type: { summary: '(option: SelectOptions) => void' } },
    },
    placeholder: {
      description: 'Texto de ajuda do campo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    emptyMessage: {
      description: 'Mensagem exibida quando nenhuma opção casa',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Nenhum resultado encontrado' },
      },
    },
    isDisabled: {
      description: 'Desabilita o componente',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isMultiple: {
      description: 'Habilita a seleção de múltiplos valores com chips',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    values: {
      description: 'Valores selecionados controlados (modo múltiplo)',
      control: false,
      table: { type: { summary: 'SelectOptions[]' } },
    },
    defaultValues: {
      description: 'Valores selecionados iniciais (modo múltiplo)',
      control: false,
      table: { type: { summary: 'SelectOptions[]' } },
    },
    onValuesChange: {
      description: 'Disparado quando os valores selecionados mudam',
      action: 'values changed',
      table: { type: { summary: '(values: SelectOptions[]) => void' } },
    },
  },
  args: {
    options: FRUITS,
    placeholder: 'Busque uma fruta',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<AutoCompleteProps>;

export const Default: Story = {
  play: testDefaultAutoComplete,
};

export const SelectByClick: Story = {
  play: testSelectByClick,
};

export const Multiple: Story = {
  args: {
    isMultiple: true,
    onValuesChange: fn(),
  },
  play: testMultipleAutoComplete,
};

export const MultipleWithDefaultValues: Story = {
  args: {
    isMultiple: true,
    defaultValues: [
      { key: '1', value: 'Banana' },
      { key: '3', value: 'Laranja' },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Ma',
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    emptyMessage: 'Nenhuma fruta encontrada',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: 'Banana',
  },
};
