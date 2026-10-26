import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultDebounce } from './useDebounce.play';
import UseDebounceStory from './UseDebounceStory.vue';

const meta: Meta<typeof UseDebounceStory> = {
  title: 'Composables/useDebounce',
  component: UseDebounceStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseDebounceStory> = {
  render: () => ({
    components: { UseDebounceStory },
    template: '<UseDebounceStory />',
  }),
  play: testDefaultDebounce,
};
