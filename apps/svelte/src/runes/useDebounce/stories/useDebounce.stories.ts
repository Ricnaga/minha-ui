import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultDebounce } from './useDebounce.play';
import UseDebounceStory from './UseDebounceStory.svelte';

const meta: Meta<typeof UseDebounceStory> = {
  title: 'Runes/useDebounce',
  component: UseDebounceStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseDebounceStory> = {
  render: () => ({
    Component: UseDebounceStory,
  }),
  play: testDefaultDebounce,
};
