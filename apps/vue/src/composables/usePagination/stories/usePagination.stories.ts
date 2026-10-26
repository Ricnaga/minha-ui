import type { Meta, StoryObj } from '@storybook/vue3';
import UsePaginationStory from './UsePaginationStory.vue';

const meta: Meta<typeof UsePaginationStory> = {
  title: 'Composables/usePagination',
  component: UsePaginationStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UsePaginationStory> = {
  render: () => ({
    components: { UsePaginationStory },
    template: '<UsePaginationStory />',
  }),
};
