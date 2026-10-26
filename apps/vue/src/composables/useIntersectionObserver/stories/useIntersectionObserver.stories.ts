import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultIntersectionObserver } from './useIntersectionObserver.play';
import UseIntersectionObserverStory from './UseIntersectionObserverStory.vue';

const meta: Meta<typeof UseIntersectionObserverStory> = {
  title: 'Composables/useIntersectionObserver',
  component: UseIntersectionObserverStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseIntersectionObserverStory> = {
  render: () => ({
    components: { UseIntersectionObserverStory },
    template: '<UseIntersectionObserverStory />',
  }),
  play: testDefaultIntersectionObserver,
};
