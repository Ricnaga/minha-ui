import type { Meta, StoryObj } from '@storybook/react-vite';

import { ChartPie } from '../ChartPie';
import type { ChartPieDataPoint, ChartPieProps } from '../chart-pie.types';
import { testCustomColors, testDefaultChartPie } from './ChartPie.play';

const data: ChartPieDataPoint[] = [
  { label: 'Chrome', value: 61 },
  { label: 'Safari', value: 19 },
  { label: 'Edge', value: 9 },
  { label: 'Firefox', value: 6 },
  { label: 'Outros', value: 5 },
];

const meta: Meta<ChartPieProps> = {
  title: 'Components/Indicadores/ChartPie',
  component: ChartPie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description:
        'Fatias `{ label, value, color? }`. Sem `color`, cicla a paleta.',
      control: false,
      table: {
        type: { summary: 'ChartPieDataPoint[]' },
        category: 'Data',
      },
    },
    valueFormatter: {
      description: 'Formata o valor exibido na legenda e na tabela acessível.',
      control: false,
      table: {
        type: { summary: '(value: number) => string' },
        category: 'Accessibility',
      },
    },
    'aria-label': {
      description: 'Nome acessível do gráfico.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Gráfico de pizza' },
        category: 'Accessibility',
      },
    },
  },
  args: {
    data,
    'aria-label': 'Navegadores',
  },
};

export default meta;
type Story = StoryObj<ChartPieProps>;

export const Default: Story = {
  play: testDefaultChartPie,
};

export const CustomColors: Story = {
  args: {
    data: [
      { label: 'Positivo', value: 70, color: 'sky' },
      { label: 'Neutro', value: 15, color: 'sky' },
      { label: 'Negativo', value: 15, color: 'emerald' },
    ],
  },
  play: testCustomColors,
};

export const ManySlices: Story = {
  args: {
    data: [
      { label: 'A', value: 20 },
      { label: 'B', value: 18 },
      { label: 'C', value: 16 },
      { label: 'D', value: 14 },
      { label: 'E', value: 12 },
      { label: 'F', value: 10 },
      { label: 'G', value: 10 },
    ],
  },
};

export const CustomValueFormatter: Story = {
  args: {
    'aria-label': 'Faturamento por canal',
    valueFormatter: (value) =>
      value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  },
};
