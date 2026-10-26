import type { Meta, StoryObj } from '@storybook/vue3';
import UseInfiniteScrollStory from './UseInfiniteScrollStory.vue';

const meta: Meta<typeof UseInfiniteScrollStory> = {
  title: 'Composables/useInfiniteScroll',
  component: UseInfiniteScrollStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseInfiniteScrollStory> = {
  render: () => ({
    components: { UseInfiniteScrollStory },
    template: '<UseInfiniteScrollStory />',
  }),
};
