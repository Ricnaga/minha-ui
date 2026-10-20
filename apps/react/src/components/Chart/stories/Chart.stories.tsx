import type { Meta, StoryObj } from '@storybook/react-vite';

import { Chart } from '../Chart';
import type { ChartDataPoint, ChartProps } from '../chart.types';
import { testDefaultChart, testLineChart } from './Chart.play';

const data: ChartDataPoint[] = [
  { label: 'Jan', value: 40 },
  { label: 'Fev', value: 65 },
  { label: 'Mar', value: 30 },
  { label: 'Abr', value: 80 },
  { label: 'Mai', value: 55 },
];

const longLabelsData: ChartDataPoint[] = [
  { label: 'Janeiro', value: 40 },
  { label: 'Fevereiro', value: 65 },
  { label: 'Março', value: 30 },
  { label: 'Abril', value: 80 },
  { label: 'Maio', value: 55 },
];

const meta: Meta<ChartProps> = {
  title: 'Components/Indicadores/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Tipo do gráfico cartesiano.',
      control: { type: 'radio' },
      options: ['bar', 'line'],
      table: {
        type: { summary: `"bar" | "line"` },
        defaultValue: { summary: 'bar' },
        category: 'Data',
      },
    },
    data: {
      description: 'Série única de dados `{ label, value }`.',
      control: false,
      table: {
        type: { summary: 'ChartDataPoint[]' },
        category: 'Data',
      },
    },
    color: {
      description: 'Cor aplicada às marcas (barras, linha e pontos).',
      control: { type: 'select' },
      options: ['sky', 'emerald', 'amber', 'violet', 'red'],
      table: {
        type: { summary: `"sky" | "emerald" | "amber" | "violet" | "red"` },
        defaultValue: { summary: 'sky' },
        category: 'Style',
      },
    },
    showGrid: {
      description: 'Exibe as linhas de grade horizontais.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    showAxis: {
      description: 'Exibe os eixos X e Y com seus rótulos.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Display',
      },
    },
    showValueLabels: {
      description: 'Exibe o valor acima de cada marca.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    valueFormatter: {
      description: 'Formata o valor exibido em rótulos e na tabela acessível.',
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
        defaultValue: { summary: 'Gráfico' },
        category: 'Accessibility',
      },
    },
  },
  args: {
    type: 'bar',
    data,
    'aria-label': 'Vendas por mês',
  },
};

export default meta;
type Story = StoryObj<ChartProps>;

export const Default: Story = {
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
  play: testDefaultChart,
};

export const Line: Story = {
  args: {
    type: 'line',
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
  play: testLineChart,
};

export const CustomColor: Story = {
  args: {
    color: 'emerald',
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
};

export const WithGridAndValueLabels: Story = {
  args: {
    showGrid: true,
    showValueLabels: true,
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
};

export const LineWithGridAndValueLabels: Story = {
  args: {
    type: 'line',
    color: 'violet',
    showGrid: true,
    showValueLabels: true,
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
};

export const CustomValueFormatter: Story = {
  args: {
    showValueLabels: true,
    'aria-label': 'Faturamento por mês',
    valueFormatter: (value) =>
      value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
};

export const LongLabels: Story = {
  args: {
    data: longLabelsData,
  },
  render: (args) => (
    <div className="w-96">
      <Chart {...args} />
    </div>
  ),
};
