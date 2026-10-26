import type { Meta, StoryObj } from '@storybook/svelte';
import UsePaginationStory from './UsePaginationStory.svelte';

const meta: Meta<typeof UsePaginationStory> = {
  title: 'Runes/usePagination',
  component: UsePaginationStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UsePaginationStory> = {
  render: () => ({
    Component: UsePaginationStory,
  }),
};
