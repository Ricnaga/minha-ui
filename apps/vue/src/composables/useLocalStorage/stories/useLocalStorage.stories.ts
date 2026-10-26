import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultLocalStorage } from './useLocalStorage.play';
import UseLocalStorageStory from './UseLocalStorageStory.vue';

const meta: Meta<typeof UseLocalStorageStory> = {
  title: 'Composables/useLocalStorage',
  component: UseLocalStorageStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseLocalStorageStory> = {
  render: () => ({
    components: { UseLocalStorageStory },
    template: '<UseLocalStorageStory />',
  }),
  play: testDefaultLocalStorage,
};
