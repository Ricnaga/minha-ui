import type { Meta, StoryObj } from '@storybook/svelte';
import IconsAll from './IconsAll.svelte';

const meta: Meta<typeof IconsAll> = {
  title: 'Icons/All',
  component: IconsAll,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {};
