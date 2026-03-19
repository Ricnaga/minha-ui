import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Badge } from '../Badge';
import type { BadgeProps } from '../badge.types';
import { testDefaultBadge } from './Badge.play';

const meta: Meta<BadgeProps> = {
  title: 'Components/Indicadores/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Cor do badge, seguindo o design system',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Tamanho do badge',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    position: {
      description: 'Posição do badge em relação ao elemento pai',
      control: 'select',
      options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'topRight' },
      },
    },
    value: {
      description: 'Valor numérico ou texto exibido no badge',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
      },
    },
    className: {
      description: 'Classes adicionais para customização do badge',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      description: 'Elemento pai ao qual o badge está attached',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    value: 3,
  },
  render: (args) => (
    <Badge {...args}>
      <button className="bg-gray-200 rounded-full p-2">Carrinho</button>
    </Badge>
  ),
  play: testDefaultBadge,
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(
        (color) => (
          <Badge key={color} color={color as BadgeProps['color']} value={5}>
            <button className="bg-gray-200 rounded-full p-4">{color}</button>
          </Badge>
        ),
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      {['small', 'medium', 'large'].map((size) => (
        <Badge key={size} size={size as BadgeProps['size']} value={3}>
          <button className="bg-gray-200 rounded-full p-4">{size}</button>
        </Badge>
      ))}
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="relative w-32 h-32 bg-gray-100 rounded-lg">
      <Badge position="topRight" value={1}>
        <div className="w-full h-full" />
      </Badge>
      <Badge position="topLeft" value={2}>
        <div className="w-full h-full" />
      </Badge>
      <Badge position="bottomRight" value={3}>
        <div className="w-full h-full" />
      </Badge>
      <Badge position="bottomLeft" value={4}>
        <div className="w-full h-full" />
      </Badge>
    </div>
  ),
};
