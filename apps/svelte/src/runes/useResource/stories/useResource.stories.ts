import type { Meta, StoryObj } from '@storybook/svelte';
import UseResourceStory from './UseResourceStory.svelte';

const meta: Meta<typeof UseResourceStory> = {
  title: 'Runes/useResource',
  component: UseResourceStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseResourceStory> = {
  render: () => ({
    Component: UseResourceStory,
  }),
};
