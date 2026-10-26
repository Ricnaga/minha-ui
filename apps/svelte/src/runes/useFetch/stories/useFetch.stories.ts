import type { Meta, StoryObj } from '@storybook/svelte';
import UseFetchStory from './UseFetchStory.svelte';

const meta: Meta<typeof UseFetchStory> = {
  title: 'Runes/useFetch',
  component: UseFetchStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseFetchStory> = {
  render: () => ({
    Component: UseFetchStory,
  }),
};
