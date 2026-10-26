import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UseFetchStory from './UseFetchStory.vue';

const meta: Meta<typeof UseFetchStory> = {
  title: 'Composables/useFetch',
  component: UseFetchStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseFetchStory> = {
  render: () => ({
    components: { UseFetchStory },
    template: '<UseFetchStory />',
  }),
};
