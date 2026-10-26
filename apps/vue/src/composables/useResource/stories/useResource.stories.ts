import type { Meta, StoryObj } from '@storybook/vue3';
import UseResourceStory from './UseResourceStory.vue';

const meta: Meta<typeof UseResourceStory> = {
  title: 'Composables/useResource',
  component: UseResourceStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseResourceStory> = {
  render: () => ({
    components: { UseResourceStory },
    template: '<UseResourceStory />',
  }),
};
