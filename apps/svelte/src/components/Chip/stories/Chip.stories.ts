import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { fn } from 'storybook/test';

import { testDefaultChip, testRemoveChip } from './Chip.play';
import ChipStory from './ChipStory.svelte';

const meta: Meta<typeof ChipStory> = {
  title: 'Components/Indicadores/Chip',
  component: ChipStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onRemove: {
      description: 'Quando informado, exibe um botão para remover o chip',
      control: false,
      table: { type: { summary: '() => void' } },
    },
  },
  args: { onclick: fn(), children: 'Chip' },
};

export default meta;
type Story = StoryObj<typeof ChipStory>;

export const Default: Story = {
  play: testDefaultChip,
};

export const WithRemove: Story = {
  args: { onRemove: fn(), children: 'Removable' },
  play: testRemoveChip,
};
