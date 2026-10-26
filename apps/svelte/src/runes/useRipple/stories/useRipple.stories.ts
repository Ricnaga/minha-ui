import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultRipple } from './useRipple.play';
import UseRippleStory from './UseRippleStory.svelte';

const meta: Meta<typeof UseRippleStory> = {
  title: 'Runes/useRipple',
  component: UseRippleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseRippleStory> = {
  render: () => ({
    Component: UseRippleStory,
  }),
  play: testDefaultRipple,
};
