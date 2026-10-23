import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import { h } from 'vue';

import { Chip } from '../';
import { testDefaultChip, testRemoveChip } from './Chip.play';
import ChipStory from './ChipStory.vue';

const meta: Meta<typeof ChipStory> = {
  title: 'Components/Indicadores/Chip',
  component: Chip,
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
  args: { onClick: fn(), children: 'Chip' },
};

export default meta;
type Story = StoryObj<typeof ChipStory>;

export const Default: Story = {
  render: (args) => h(ChipStory, args),
  play: testDefaultChip,
};

export const WithRemove: Story = {
  render: (args) => h(ChipStory, args),
  args: { onRemove: fn(), children: 'Removable' },
  play: testRemoveChip,
};
