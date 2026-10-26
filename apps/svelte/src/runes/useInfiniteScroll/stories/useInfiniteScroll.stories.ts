import type { Meta, StoryObj } from '@storybook/svelte';
import UseInfiniteScrollStory from './UseInfiniteScrollStory.svelte';

const meta: Meta<typeof UseInfiniteScrollStory> = {
  title: 'Runes/useInfiniteScroll',
  component: UseInfiniteScrollStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseInfiniteScrollStory> = {
  render: () => ({
    Component: UseInfiniteScrollStory,
  }),
};
