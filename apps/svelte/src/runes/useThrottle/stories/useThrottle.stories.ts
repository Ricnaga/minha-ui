import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultThrottle } from './useThrottle.play';
import UseThrottleStory from './UseThrottleStory.svelte';

const meta: Meta<typeof UseThrottleStory> = {
  title: 'Runes/useThrottle',
  component: UseThrottleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseThrottleStory> = {
  render: () => ({
    Component: UseThrottleStory,
  }),
  play: testDefaultThrottle,
};
