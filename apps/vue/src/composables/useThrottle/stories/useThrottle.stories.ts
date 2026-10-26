import type { Meta, StoryObj } from '@storybook/vue3';
import { testDefaultThrottle } from './useThrottle.play';
import UseThrottleStory from './UseThrottleStory.vue';

const meta: Meta<typeof UseThrottleStory> = {
  title: 'Composables/useThrottle',
  component: UseThrottleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseThrottleStory> = {
  render: () => ({
    components: { UseThrottleStory },
    template: '<UseThrottleStory />',
  }),
  play: testDefaultThrottle,
};
