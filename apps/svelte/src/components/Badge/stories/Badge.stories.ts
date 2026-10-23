import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultBadge } from './Badge.play';
import BadgeColorsStory from './BadgeColorsStory.svelte';
import BadgePositionsStory from './BadgePositionsStory.svelte';
import BadgeSizesStory from './BadgeSizesStory.svelte';
import BadgeStory from './BadgeStory.svelte';

const meta: Meta<typeof BadgeStory> = {
  title: 'Components/Indicadores/Badge',
  component: BadgeStory,
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
    children: {
      description: 'Elemento pai ao qual o badge está attached',
      control: false,
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    value: 3,
  },
};

export default meta;
type Story = StoryObj<typeof BadgeStory>;

type ColorsStory = StoryObj<typeof BadgeColorsStory>;

type SizesStory = StoryObj<typeof BadgeSizesStory>;

type PositionsStory = StoryObj<typeof BadgePositionsStory>;

export const Default: Story = {
  play: testDefaultBadge,
};

export const Colors: ColorsStory = {
  render: () => ({ Component: BadgeColorsStory }),
};

export const Sizes: SizesStory = {
  render: () => ({ Component: BadgeSizesStory }),
};

export const Positions: PositionsStory = {
  render: () => ({ Component: BadgePositionsStory }),
};
